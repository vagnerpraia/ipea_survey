import React, { Component } from 'react';
import { PanResponder, StyleSheet, TextInput, ToastAndroid, View } from 'react-native';
import { Button, Card, CardItem, Container, Content, DeckSwiper, Footer, FooterTab, Header, Icon, ListItem, Radio, Text, Title } from 'native-base';
import RNFetchBlob from 'react-native-fetch-blob';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleGesture from 'react-native-simple-gesture';
import { Sae } from 'react-native-textinput-effects';

import { questions } from './content/Questions';
import { businessQuestion } from './content/BusinessQuestion';
import { divisionQuestion } from './content/DivisionQuestion';
import { passQuestion } from './content/PassQuestion';

import SideMenuQuiz from './SideMenuQuiz';
import ViewDomicilio from './ViewDomicilio';
import ViewMorador from './ViewMorador';

import ReplyInputNumeric from './reply/ReplyInputNumeric';
import ReplyMultiSelect from './reply/ReplyMultiSelect';
import ReplyRadio from './reply/ReplyRadio';

import SideMenu from 'react-native-side-menu';

let id;
let model;
let indexPage;
let idQuestao;
let numeroQuestao;
let titulo;
let screen;

export default class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        id = this.props.id;
        model = this.props.model;
        indexPage = this.props.indexPage;
        idQuestao = 'questao_' + questions[indexPage].id;
        numeroQuestao = questions[indexPage].id.replace(/\D/g,'');

        for(keyDiv in divisionQuestion){
            let div = divisionQuestion[keyDiv];

            if(numeroQuestao === div.inicio) screen = div.titulo;

            if(numeroQuestao >= div.inicio && numeroQuestao < div.fim){
                titulo = div.titulo;
                for(keySub in div.subdivisoes){
                    let sub = div.subdivisoes[keySub];
                    if(numeroQuestao >= sub.inicio && numeroQuestao < sub.fim){
                        titulo = sub.titulo;
                    }
                }
            }
        }
    }

    componentWillMount(){
        if(this.props.newQuiz === true){
            for(key in model.quiz){
                model.quiz[key] = null;
            }

            model.createFile('quiz', (result) => {
                id = result;
            });
        }

        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gs) => {
                let sgs = new SimpleGesture(e, gs);

                if(sgs.isSimpleSwipeRight()){
                    if(model.flagSwiperVoltar){
                        model.flagSwiperVoltar = false;
                        if(indexPage > 0){
                            this.props.navigator.replacePreviousAndPop({
                                name: 'quiz',
                                id: id,
                                model: model,
                                indexPage: Number(indexPage) - 1,
                                newQuiz: false
                            });
                        }else{
                            ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                        }
                    }else{
                        model.flagSwiperVoltar = true;
                    }
                }
                if(sgs.isSimpleSwipeLeft()){
                    if(model.flagSwiperSeguir){
                        model.flagSwiperSeguir = false;
                        model.saveFile(id, 'quiz', model.quiz);

                        if(model.quiz[idQuestao] != null){
                            if(Number(numeroQuestao) + 1 <= model.maxQuestion){
                                this.props.navigator.push({
                                    name: 'quiz',
                                    id: id,
                                    model: model,
                                    indexPage: Number(indexPage) + 1,
                                    newQuiz: false
                                });
                            }
                        }else{
                            ToastAndroid.showWithGravity('Responda a questão ' + numeroQuestao, ToastAndroid.SHORT, ToastAndroid.CENTER);
                        }
                    }else{
                        ToastAndroid.showWithGravity('Responda a questão', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    }
                }
            }
        });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({
            isOpen: isOpen
        });
    }

    onItemSelected = (isOpen) => {
        this.setState({
            isOpen: isOpen
        });
    }

    render() {
        let open = this.state.isOpen;

        const menu = <SideMenuQuiz id={id} model={model} indexPage={indexPage} navigator={this.props.navigator} onItemSelected={this.onItemSelected} />;

        function renderIf(condition, content) {
            if (condition) {
                return content;
            } else {
                return null;
            }
        }

        let questao = questions[indexPage];

        return (
            <SideMenu menu={menu} menuPosition={'right'} isOpen={open} onChange={(isOpen) => {
                this.updateMenuState(isOpen)
            }}>
                <Container style={styles.container}>
                    <Header>
                        <Button transparent onPress={() => {
                            if(indexPage === 0){
                                model.deleteQuiz(id);
                            };

                            this.props.navigator.replacePreviousAndPop({
                                name: 'main'
                            });
                        }}>
                            <Icon name='ios-arrow-back' />
                        </Button>

                        <Title>{titulo}</Title>

                        <Button transparent onPress={() => {
                            this.toggle();
                        }}>
                            <Icon name='ios-menu' />
                        </Button>
                    </Header>
                    <Content {...this._panResponder.panHandlers}>
                        <Card style={styles.card}>
                            {renderIf(questions.id !== 'id',
                                <CardItem>
                                    <Text style={styles.question}>{questao.id.replace(/\D/g,'') + '. ' + questao.pergunta}</Text>
                                    <Text note>{questao.observacao_pergunta}</Text>
                                </CardItem>
                            )}

                            <CardItem cardBody style={styles.cardItem}>
                                {renderIf(questao.pergunta_secundaria !== '',
                                    <View style={styles.pergunta_secundaria}>
                                        <Text>{questao.id.replace(/[0-9]/g, '').toUpperCase() + ') ' + questao.pergunta_secundaria.pergunta}</Text>
                                        <Text note>{questao.pergunta_secundaria.observacao_pergunta}</Text>
                                    </View>
                                )}

                                {renderIf(questao.tipo === 'domicilio',
                                    <ViewDomicilio model={model} passQuestion={passQuestion} questao={questao} />
                                )}

                                {renderIf(questao.tipo === 'morador',
                                    <ViewMorador model={model} passQuestion={passQuestion} questao={questao} />
                                )}

                                {renderIf(questao.tipo === 'input_numeric',
                                    <ReplyInputNumeric model={model} passQuestion={passQuestion} questao={questao} />
                                )}

                                {renderIf(questao.tipo === 'multiple',
                                    <ReplyMultiSelect model={model} passQuestion={passQuestion} businessQuestion={businessQuestion} questao={questao} />
                                )}

                                {renderIf(questao.tipo === 'radio',
                                    <ReplyRadio model={model} passQuestion={passQuestion} questao={questao} />
                                )}
                            </CardItem>

                            {renderIf(questao.pergunta_extensao !== '',
                                <CardItem>
                                    <Sae
                                        label={questao.pergunta_extensao.pergunta}
                                        defaultValue={model.quiz[idQuestao + '_secundaria']}
                                        iconClass={FontAwesomeIcon}
                                        iconName={'pencil'}
                                        iconColor={'black'}
                                        autoCapitalize={'none'}
                                        autoCorrect={false}
                                        labelStyle={styles.textInput}
                                        inputStyle={styles.textInput}
                                    />
                                </CardItem>
                            )}
                        </Card>
                    </Content>
                    <Footer>
                        <FooterTab>
                            {renderIf(indexPage == 0,
                                <Button transparent onPress={()=> {
                                    ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                                }}>
                                    <Icon name='ios-arrow-back' />
                                </Button>
                            )}

                            {renderIf(indexPage != 0,
                                <Button transparent onPress={() => {
                                    model.saveFile(id, 'quiz', model.quiz);
                                    this.props.navigator.replacePreviousAndPop({
                                        name: 'quiz',
                                        id: id,
                                        model: model,
                                        indexPage: Number(indexPage) - 1,
                                        newQuiz: false
                                    });
                                }}>
                                    <Icon name='ios-arrow-back' />
                                </Button>
                            )}

                            <Button transparent onPress={() => {
                                model.saveFile(id, 'quiz', model.quiz);

                                if(model.quiz[idQuestao] != null){
                                    if(Number(numeroQuestao) + 1 <= model.maxQuestion){
                                        this.props.navigator.push({
                                            name: 'quiz',
                                            id: id,
                                            model: model,
                                            indexPage: Number(indexPage) + 1,
                                            newQuiz: false
                                        });
                                    }else{
                                        ToastAndroid.showWithGravity('Responda a questão ' + numeroQuestao, ToastAndroid.SHORT, ToastAndroid.CENTER);
                                    }
                                }else{
                                    ToastAndroid.showWithGravity('Responda a questão', ToastAndroid.SHORT, ToastAndroid.CENTER);
                                }
                            }}>
                                <Icon name='ios-arrow-forward' />
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    content:{
        paddingBottom: 20,
    },
    card:{
        elevation: 3
    },
    cardItem:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
    },
    label: {
        fontSize: 14,
        color: '#000000',
        textAlignVertical: 'center',
        paddingLeft: 10,
        paddingBottom: 14,
    },
    question: {
        fontWeight: 'bold',
    },
    observacao_opcoes: {
        fontSize: 14,
        color: 'gray',
    },
    radioLabel: {
        fontSize: 14,
        color: '#000000',
        paddingTop: 5,
        paddingBottom: 5,
    },
    radioForm: {
        paddingLeft: 0,
    },
    pergunta_secundaria: {
        paddingBottom: 10,
    },
    textInput: {
        fontSize: 14,
        color: '#000000'
    },
    textInputNumeric: {
        width: 50,
    },
});

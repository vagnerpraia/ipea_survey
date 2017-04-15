import React, { Component } from 'react';
import { PanResponder, StyleSheet, ToastAndroid, View } from 'react-native';
import { Button, Card, CardItem, Container, Content, Footer, FooterTab, Header, Icon, Text, Title } from 'native-base';
import SideMenu from 'react-native-side-menu';
import SimpleGesture from 'react-native-simple-gesture';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

import SideMenuQuiz from './SideMenuQuiz';
import ViewDomicilio from './ViewDomicilio';
import ViewMorador from './ViewMorador';
import ReplyInputNumeric from './reply/ReplyInputNumeric';
import ReplyMultiSelect from './reply/ReplyMultiSelect';
import ReplyRadio from './reply/ReplyRadio';

import FileStore from './../../FileStore';
import QuizData from './../../data/QuizData';
import { questoes } from './../../data/Questoes';

let admin;
let quiz;
let idQuestao;
let numeroQuestao;

export default class Quiz_2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    componentWillMount(){
        admin = this.props.admin;

        if(this.props.newQuiz === true){
            quiz = new QuizData(new Date().getTime());
            FileStore.createFile(quiz, 'domicilio');
        }else{
            quiz = this.props.quiz;
        }

        FileStore.saveFile(quiz, 'domicilio');

        idQuestao = 'questao_' + questoes[admin.indexPage].id;
        numeroQuestao = questoes[admin.indexPage].id.replace(/\D/g,'');

        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gs) => {
                let sgs = new SimpleGesture(e, gs);

                if(sgs.isSimpleSwipeRight()){
                    if(admin.flagSwiperVoltar){
                        admin.flagSwiperVoltar = false;
                        if(admin.indexPage > 0){
                            admin.indexPage = Number(admin.indexPage) - 1;
                            this.props.navigator.replacePreviousAndPop({
                                name: 'quiz',
                                admin: admin,
                                quiz: quiz,
                                newQuiz: false
                            });
                        }else{
                            ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                        }
                    }else{
                        admin.flagSwiperVoltar = true;
                    }
                }
                if(sgs.isSimpleSwipeLeft()){
                    if(admin.flagSwiperSeguir){
                        admin.flagSwiperSeguir = false;

                        let quizResponse = quiz.domicilio[idQuestao];
                        if(quizResponse != null){
                            if(Number(numeroQuestao) + 1 <= admin.maxQuestion){
                                admin.indexPage = Number(admin.indexPage) + 1;
                                this.props.navigator.push({
                                    name: 'quiz',
                                    admin: admin,
                                    quiz: quiz,
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

    render() {
        let open = this.state.isOpen;
        let questao = questoes[admin.indexPage];

        const menu = <SideMenuQuiz admin={admin} quiz={quiz} navigator={this.props.navigator} />;

        function renderIf(condition, content) {
            if (condition) {
                return content;
            } else {
                return null;
            }
        }

        return (
            <SideMenu menu={menu} menuPosition={'right'} isOpen={open} onChange={(isOpen) => {this.updateMenuState(isOpen)}}>
                <Container style={styles.container}>
                    <Header>
                        <Button transparent onPress={() => {
                            if(admin.indexPage === 0){
                                FileStore.deleteQuiz(quiz);
                            };

                            this.props.navigator.replacePreviousAndPop({
                                name: 'main'
                            });
                        }}>
                            <Icon name='ios-arrow-back' />
                        </Button>

                        <Title>{questao.titulo}</Title>

                        <Button transparent onPress={() => {
                            this.toggle();
                        }}>
                            <Icon name='ios-menu' />
                        </Button>
                    </Header>
                    <Content {...this._panResponder.panHandlers}>
                        <Card style={styles.card}>
                            {renderIf(questoes.id !== 'id',
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
                                    <ViewDomicilio admin={admin} questao={questao} />
                                )}

                                {renderIf(questao.tipo === 'morador',
                                    <ViewMorador admin={admin} questao={questao} />
                                )}

                                {renderIf(questao.tipo === 'input_numeric',
                                    <ReplyInputNumeric admin={admin} questao={questao} />
                                )}

                                {renderIf(questao.tipo === 'multiple',
                                    <ReplyMultiSelect admin={admin} questao={questao} />
                                )}

                                {renderIf(questao.tipo === 'radio',
                                    <ReplyRadio admin={admin} quiz={quiz} questao={questao}  />
                                )}
                            </CardItem>

                            {renderIf(questao.pergunta_extensao !== '',
                                <CardItem>
                                    <Sae
                                        label={questao.pergunta_extensao.pergunta}
                                        defaultValue={quiz.domicilio[idQuestao + '_secundaria']}
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
                            {renderIf(admin.indexPage == 0,
                                <Button transparent onPress={()=> {
                                    ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                                }}>
                                    <Icon name='ios-arrow-back' />
                                </Button>
                            )}

                            {renderIf(admin.indexPage != 0,
                                <Button transparent onPress={() => {
                                    admin.indexPage = Number(admin.indexPage) - 1;
                                    this.props.navigator.replacePreviousAndPop({
                                        name: 'quiz',
                                        admin: admin,
                                        quiz: quiz,
                                        newQuiz: false
                                    });
                                }}>
                                    <Icon name='ios-arrow-back' />
                                </Button>
                            )}

                            <Button transparent onPress={() => {
                                let quizResponse = quiz.domicilio[idQuestao];

                                if(quizResponse != null){
                                    if(Number(numeroQuestao) + 1 <= admin.maxQuestion){
                                        admin.indexPage = Number(admin.indexPage) + 1;
                                        this.props.navigator.push({
                                            name: 'quiz',
                                            admin: admin,
                                            quiz: quiz,
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

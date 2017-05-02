import React, { Component } from 'react';
import { PanResponder, StyleSheet, ToastAndroid, View } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Title } from 'native-base';
import SideMenu from 'react-native-side-menu';
import SimpleGesture from 'react-native-simple-gesture';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

import SideMenuQuiz from './SideMenuQuiz';
import ReplyInputNumeric from './reply/ReplyInputNumeric';
import ReplyMultiSelect from './reply/ReplyMultiSelect';
import ReplyRadio from './reply/ReplyRadio';

import FileStore from './../../FileStore';
import MoradorData from './../../data/MoradorData';
import { questoes } from './../../data/QuestoesMorador';
import { styles } from './../../Styles';

export default class Morador extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            admin: this.props.admin,
            quiz: this.props.quiz,
            isOpen: false
        };
    }

    componentWillMount(){
        if(this.state.quiz.morador === null){
            this.state.quiz.morador = [new MoradorData(0)];
        }else if(this.state.id === null){
            let id = 0;
            FileStore.getMoradoresList(this.state.admin.id, function(listFile) {
                listFile.forEach(function(idFile) {
                    if(idFile > id) id = idFile;
                });
            });
            this.state.id = id;
            this.state.quiz.morador.push(new MoradorData(id));
        }

        FileStore.saveFileMorador(this.state.id, this.state.quiz.morador);

        idQuestao = 'questao_' + questoes[this.state.admin.indexPage].id;
        numeroQuestao = questoes[this.state.admin.indexPage].id.replace(/\D/g,'');

        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gs) => {
                let sgs = new SimpleGesture(e, gs);
                if(sgs.isSimpleSwipeRight()){
                    if(this.state.admin.flagSwiperVoltar){
                        this.popScreen();
                    }
                    this.state.admin.flagSwiperVoltar = !this.state.admin.flagSwiperVoltar;
                }
                if(sgs.isSimpleSwipeLeft()){
                    if(this.state.admin.flagSwiperSeguir){
                        this.pushScreen();
                    }
                    this.state.admin.flagSwiperSeguir = !this.state.admin.flagSwiperSeguir;
                }
            }
        });
    }

    popQuizScreen(){
        if(this.state.admin.indexPage === 0){
            for(key in this.state.quiz.morador){
                if(this.state.quiz.morador.id === this.state.id) delete this.state.quiz.morador[keys];
                if(this.state.quiz.morador.length === 0) this.state.quiz.morador = null;
            }
            FileStore.deleteMorador(this.state.admin.id, this.state.id);
        };
        this.props.navigator.replacePreviousAndPop({
            name: 'lista_moradores',
            admin: this.state.admin,
            quiz: this.state.quiz
        });
    }

    popScreen(){
        if(this.state.admin.indexPage > 0){
            this.state.admin.indexPage = Number(this.state.admin.indexPage) - 1;
            this.props.navigator.replacePreviousAndPop({
                name: 'morador',
                admin: this.state.admin,
                quiz: this.state.quiz
            });
        }else{
            ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
    }

    pushScreen(){
        if(this.state.quiz.domicilio[idQuestao] != null){
            if(Number(numeroQuestao) + 1 <= this.state.admin.maxQuestion){
                this.state.admin.indexPage = Number(this.state.admin.indexPage) + 1;

                if(this.state.admin.indexPage >= questoes.length){
                    ToastAndroid.showWithGravity('Questionário Finalizado\nNão há como avançar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    FileStore.saveFileMorador(this.state.id, this.state.quiz.morador);
                    this.state.admin.moradorCompleto = true;
                }else{
                    this.props.navigator.push({
                        name: 'morador',
                        admin: this.state.admin,
                        quiz: this.state.quiz
                    });
                }
            }else{
                ToastAndroid.showWithGravity('Responda a questão ' + numeroQuestao, ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
        }else{
            ToastAndroid.showWithGravity('Responda a questão', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
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
        let admin = this.state.admin;
        let quiz = this.state.quiz;
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
                        <Left>
                            <Button transparent onPress={() => {this.popQuizScreen()}}>
                                <Icon name='ios-arrow-back' />
                            </Button>
                        </Left>

                        <Body style={styles.bodyHeader}>
                            <Title>{questao.titulo}</Title>
                        </Body>

                        <Right>
                            <Button transparent onPress={() => {this.toggle()}}>
                                <Icon name='ios-menu' />
                            </Button>
                        </Right>
                    </Header>
                    <Content {...this._panResponder.panHandlers}>
                        <Card>
                            {renderIf(questoes.id !== 'id',
                                <CardItem style={styles.cardItemQuestao}>
                                    <Text style={styles.questao}>{questao.id.replace(/\D/g,'') + '. ' + questao.pergunta}</Text>
                                    <Text style={styles.observacaoQuestao}>{questao.observacao_pergunta}</Text>
                                </CardItem>
                            )}

                            {renderIf(questao.pergunta_secundaria !== '',
                                <CardItem style={styles.pergunta_secundaria}>
                                    <Text>{questao.id.replace(/[0-9]/g, '').toUpperCase() + ') ' + questao.pergunta_secundaria.pergunta}</Text>
                                    <Text note>{questao.pergunta_secundaria.observacao_pergunta}</Text>
                                </CardItem>
                            )}

                            <CardItem cardBody style={{justifyContent: 'center'}}>
                                {renderIf(questao.tipo === 'input_numeric',
                                    <ReplyInputNumeric admin={admin} quiz={quiz} questao={questao} />
                                )}

                                {renderIf(questao.tipo === 'multiple',
                                    <ReplyMultiSelect admin={admin} quiz={quiz} questao={questao} />
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
                            <Button onPress={() => {this.popScreen()}}>
                                <Icon name='ios-arrow-back' />
                            </Button>
                            <Button onPress={() => {this.pushScreen()}}>
                                <Icon name='ios-arrow-forward' />
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </SideMenu>
        );
    }
}

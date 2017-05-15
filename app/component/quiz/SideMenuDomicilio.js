import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { List, ListItem, Text } from 'native-base';

let admin;
let quiz;

export default class SideMenuDomicilio extends Component {
    constructor(props) {
        super(props);

        admin = this.props.admin;
        quiz = this.props.quiz;
    }

    passQuestion(index, numeroQuestao){
        let navigator = this.props.navigator;

        if(index < admin.indexPage){
            admin.indexPage = index;
            navigator.replacePreviousAndPop({
                name: 'domicilio',
                admin: admin,
                quiz: quiz
            });
        }else if (index > admin.indexPage) {
            if(numeroQuestao <= admin.maxQuestion){
                admin.indexPage = index;
                navigator.push({
                    name: 'domicilio',
                    admin: admin,
                    quiz: quiz,
                    newQuiz: false
                });
            }else{
                ToastAndroid.showWithGravity('Responda a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
        }
    }

    render() {
        return (
            <ScrollView scrollsToTop={false}>
                <List>
                    <ListItem key={1} onPress={() => {this.passQuestion(0, 1)}}>
                        <Text>Questão 1</Text>
                    </ListItem>
                    <ListItem key={2} onPress={() => {this.passQuestion(1, 2)}}>
                        <Text>Questão 2</Text>
                    </ListItem>
                    <ListItem key={3} onPress={() => {this.passQuestion(2, 3)}}>
                        <Text>Questão 3</Text>
                    </ListItem>
                    <ListItem key={4} onPress={() => {this.passQuestion(3, 4)}}>
                        <Text>Questão 4</Text>
                    </ListItem>
                    <ListItem key={5} onPress={() => {this.passQuestion(4, 5)}}>
                        <Text>Questão 5</Text>
                    </ListItem>
                    <ListItem key={6} onPress={() => {this.passQuestion(14, 6)}}>
                        <Text>Questão 6</Text>
                    </ListItem>
                    <ListItem key={7} onPress={() => {this.passQuestion(15, 7)}}>
                        <Text>Questão 7</Text>
                    </ListItem>
                    <ListItem key={8} onPress={() => {this.passQuestion(16, 8)}}>
                        <Text>Questão 8</Text>
                    </ListItem>
                    <ListItem key={9} onPress={() => {this.passQuestion(17, 9)}}>
                        <Text>Questão 9</Text>
                    </ListItem>
                    <ListItem key={10} onPress={() => {this.passQuestion(37, 10)}}>
                        <Text>Questão 10</Text>
                    </ListItem>
                    <ListItem key={11} onPress={() => {this.passQuestion(38, 11)}}>
                        <Text>Questão 11</Text>
                    </ListItem>
                    <ListItem key={12} onPress={() => {this.passQuestion(39, 12)}}>
                        <Text>Questão 12</Text>
                    </ListItem>
                    <ListItem key={13} onPress={() => {this.passQuestion(40, 13)}}>
                        <Text>Questão 13</Text>
                    </ListItem>
                    <ListItem key={14} onPress={() => {this.passQuestion(41, 14)}}>
                        <Text>Questão 14</Text>
                    </ListItem>
                    <ListItem key={15} onPress={() => {this.passQuestion(42, 15)}}>
                        <Text>Questão 15</Text>
                    </ListItem>
                    <ListItem key={16} onPress={() => {this.passQuestion(43, 16)}}>
                        <Text>Questão 16</Text>
                    </ListItem>
                    <ListItem key={17} onPress={() => {this.passQuestion(44, 17)}}>
                        <Text>Questão 17</Text>
                    </ListItem>
                    <ListItem key={18} onPress={() => {this.passQuestion(45, 18)}}>
                        <Text>Questão 18</Text>
                    </ListItem>
                    <ListItem key={19} onPress={() => {this.passQuestion(46, 19)}}>
                        <Text>Questão 19</Text>
                    </ListItem>
                    <ListItem key={20} onPress={() => {this.passQuestion(47, 20)}}>
                        <Text>Questão 20</Text>
                    </ListItem>
                    <ListItem key={21} onPress={() => {this.passQuestion(48, 21)}}>
                        <Text>Questão 21</Text>
                    </ListItem>
                    <ListItem key={22} onPress={() => {this.passQuestion(49, 22)}}>
                        <Text>Questão 22</Text>
                    </ListItem>
                    <ListItem key={23} onPress={() => {this.passQuestion(50, 23)}}>
                        <Text>Questão 23</Text>
                    </ListItem>
                    <ListItem key={24} onPress={() => {this.passQuestion(51, 24)}}>
                        <Text>Questão 24</Text>
                    </ListItem>
                    <ListItem key={25} onPress={() => {this.passQuestion(52, 25)}}>
                        <Text>Questão 25</Text>
                    </ListItem>
                    <ListItem key={26} onPress={() => {this.passQuestion(53, 26)}}>
                        <Text>Questão 26</Text>
                    </ListItem>
                    <ListItem key={27} onPress={() => {this.passQuestion(54, 27)}}>
                        <Text>Questão 27</Text>
                    </ListItem>
                    <ListItem key={28} onPress={() => {this.passQuestion(55, 28)}}>
                        <Text>Questão 28</Text>
                    </ListItem>
                    <ListItem key={29} onPress={() => {this.passQuestion(56, 29)}}>
                        <Text>Questão 29</Text>
                    </ListItem>
                    <ListItem key={30} onPress={() => {this.passQuestion(57, 30)}}>
                        <Text>Questão 30</Text>
                    </ListItem>
                    <ListItem key={31} onPress={() => {this.passQuestion(63, 31)}}>
                        <Text>Questão 31</Text>
                    </ListItem>
                    <ListItem key={32} onPress={() => {this.passQuestion(64, 32)}}>
                        <Text>Questão 32</Text>
                    </ListItem>
                    <ListItem key={33} onPress={() => {this.passQuestion(65, 33)}}>
                        <Text>Questão 33</Text>
                    </ListItem>
                    <ListItem key={34} onPress={() => {this.passQuestion(66, 34)}}>
                        <Text>Questão 34</Text>
                    </ListItem>
                    <ListItem key={35} onPress={() => {this.passQuestion(67, 35)}}>
                        <Text>Questão 35</Text>
                    </ListItem>
                    <ListItem key={36} onPress={() => {this.passQuestion(68, 36)}}>
                        <Text>Questão 36</Text>
                    </ListItem>
                    <ListItem key={37} onPress={() => {this.passQuestion(69, 37)}}>
                        <Text>Questão 37</Text>
                    </ListItem>
                    <ListItem key={38} onPress={() => {this.passQuestion(70, 38)}}>
                        <Text>Questão 38</Text>
                    </ListItem>
                    <ListItem key={39} onPress={() => {this.passQuestion(75, 39)}}>
                        <Text>Questão 39</Text>
                    </ListItem>
                    <ListItem key={40} onPress={() => {this.passQuestion(76, 40)}}>
                        <Text>Questão 40</Text>
                    </ListItem>
                    <ListItem key={41} onPress={() => {this.passQuestion(77, 41)}}>
                        <Text>Questão 41</Text>
                    </ListItem>
                    <ListItem key={42} onPress={() => {this.passQuestion(78, 42)}}>
                        <Text>Questão 42</Text>
                    </ListItem>
                    <ListItem key={43} onPress={() => {this.passQuestion(79, 43)}}>
                        <Text>Questão 43</Text>
                    </ListItem>
                    <ListItem key={44} onPress={() => {this.passQuestion(80, 44)}}>
                        <Text>Questão 44</Text>
                    </ListItem>
                    <ListItem key={45} onPress={() => {this.passQuestion(81, 45)}}>
                        <Text>Questão 45</Text>
                    </ListItem>
                    <ListItem key={46} onPress={() => {this.passQuestion(82, 46)}}>
                        <Text>Questão 46</Text>
                    </ListItem>
                    <ListItem key={47} onPress={() => {this.passQuestion(83, 47)}}>
                        <Text>Questão 47</Text>
                    </ListItem>
                    <ListItem key={48} onPress={() => {this.passQuestion(84, 48)}}>
                        <Text>Questão 48</Text>
                    </ListItem>
                    <ListItem key={49} onPress={() => {this.passQuestion(85, 49)}}>
                        <Text>Questão 49</Text>
                    </ListItem>
                    <ListItem key={50} onPress={() => {this.passQuestion(93, 50)}}>
                        <Text>Questão 50</Text>
                    </ListItem>
                    <ListItem key={51} onPress={() => {this.passQuestion(94, 51)}}>
                        <Text>Questão 51</Text>
                    </ListItem>
                    <ListItem key={52} onPress={() => {this.passQuestion(102, 52)}}>
                        <Text>Questão 52</Text>
                    </ListItem>
                    <ListItem key={53} onPress={() => {this.passQuestion(103, 53)}}>
                        <Text>Questão 53</Text>
                    </ListItem>
                    <ListItem key={54} onPress={() => {this.passQuestion(104, 54)}}>
                        <Text>Questão 54</Text>
                    </ListItem>
                    <ListItem key={55} onPress={() => {this.passQuestion(105, 55)}}>
                        <Text>Questão 55</Text>
                    </ListItem>
                    <ListItem key={56} onPress={() => {this.passQuestion(111, 56)}}>
                        <Text>Questão 56</Text>
                    </ListItem>
                    <ListItem key={57} onPress={() => {this.passQuestion(112, 57)}}>
                        <Text>Questão 57</Text>
                    </ListItem>
                    <ListItem key={58} onPress={() => {this.passQuestion(113, 58)}}>
                        <Text>Questão 58</Text>
                    </ListItem>
                    <ListItem key={59} onPress={() => {this.passQuestion(114, 59)}}>
                        <Text>Questão 59</Text>
                    </ListItem>
                    <ListItem key={60} onPress={() => {this.passQuestion(115, 60)}}>
                        <Text>Questão 60</Text>
                    </ListItem>
                    <ListItem key={61} onPress={() => {this.passQuestion(116, 61)}}>
                        <Text>Questão 61</Text>
                    </ListItem>
                    <ListItem key={62} onPress={() => {this.passQuestion(117, 62)}}>
                        <Text>Questão 62</Text>
                    </ListItem>
                    <ListItem key={63} onPress={() => {this.passQuestion(128, 63)}}>
                        <Text>Questão 63</Text>
                    </ListItem>
                    <ListItem key={64} onPress={() => {this.passQuestion(137, 64)}}>
                        <Text>Questão 64</Text>
                    </ListItem>
                    <ListItem key={56} onPress={() => {this.passQuestion(138, 65)}}>
                        <Text>Questão 65</Text>
                    </ListItem>
                    <ListItem key={66} onPress={() => {this.passQuestion(139, 66)}}>
                        <Text>Questão 66</Text>
                    </ListItem>
                    <ListItem key={67} onPress={() => {this.passQuestion(140, 67)}}>
                        <Text>Questão 67</Text>
                    </ListItem>
                    <ListItem key={68} onPress={() => {this.passQuestion(141, 68)}}>
                        <Text>Questão 68</Text>
                    </ListItem>
                </List>
            </ScrollView>
        );
    }
};

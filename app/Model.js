import { AsyncStorage } from 'react-native';

import RNFetchBlob from 'react-native-fetch-blob';

const dirs = RNFetchBlob.fs.dirs;
const fs = RNFetchBlob.fs;

var dir_base = dirs.DownloadDir.substring(0, dirs.DownloadDir.lastIndexOf('/') + 1);
var dir_file = dir_base + 'Ipea/IpeaSurvey/';

var quiz = {
    "id": null,
    "nome_aplicador": null,
    "questao_1": null,
    "questao_2": null,
    "questao_3": null,
    "questao_4": null,
    "questao_5a": null,
    "questao_5b": null,
    "questao_5c": null,
    "questao_5d": null,
    "questao_5e": null,
    "questao_5f": null,
    "questao_5g": null,
    "questao_5h": null,
    "questao_5i": null,
    "questao_6": null,
    "questao_7": null,
    "questao_8": null,
    "questao_9a": null,
    "questao_9b": null,
    "questao_9c": null,
    "questao_9d": null,
    "questao_9e": null,
    "questao_9f": null,
    "questao_9g": null,
    "questao_9h": null,
    "questao_9i": null,
    "questao_9j": null,
    "questao_9l": null,
    "questao_9m": null,
    "questao_9n": null,
    "questao_9o": null,
    "questao_9p": null,
    "questao_9q": null,
    "questao_9r": null,
    "questao_9s": null,
    "questao_9t": null,
    "questao_9u": null,
    "questao_9v": null,
    "questao_10": null,
    "questao_11": null,
    "questao_12": null,
    "questao_13": null,
    "questao_14": null,
    "questao_15": null,
    "questao_16": null,
    "questao_17": null,
    "questao_18": null,
    "questao_19": null,
    "questao_20": null,
    "questao_21": null,
    "questao_22": null,
    "questao_23": null,
    "questao_24": null,
    "questao_25": null,
    "questao_26": null,
    "questao_27": null,
    "questao_28": null,
    "questao_29": null,
    "questao_30a": null,
    "questao_30b": null,
    "questao_30c": null,
    "questao_30d": null,
    "questao_30r": null,
    "questao_30f": null,
    "questao_31": null,
    "questao_32": null,
    "questao_33": null,
    "questao_34": null,
    "questao_35a": null,
    "questao_35b": null,
    "questao_35c": null,
    "questao_35d": null,
    "questao_35e": null,
    "questao_36": null,
    "questao_37": null,
    "questao_38": null,
    "questao_39": null,
    "questao_40": null,
    "questao_41": null,
    "questao_42": null,
    "questao_42_secundaria": null,
    "questao_43": null,
    "questao_43_secundaria": null,
    "questao_44": null,
    "questao_45": null,
    "questao_46": null,
    "questao_47": null,
    "questao_48": null,
    "questao_49a": null,
    "questao_49b": null,
    "questao_49c": null,
    "questao_49d": null,
    "questao_49e": null,
    "questao_49f": null,
    "questao_49g": null,
    "questao_49h": null,
    "questao_50": null,
    "questao_50_secundaria": null,
    "questao_51": null,
    "questao_52": null,
    "questao_53": null,
    "questao_54": null,
    "questao_55a": null,
    "questao_55b": null,
    "questao_55c": null,
    "questao_55d": null,
    "questao_55e": null,
    "questao_55f": null,
    "questao_56": null,
    "questao_57": null,
    "questao_58": null,
    "questao_58_secundaria": null,
    "questao_59": null,
    "questao_60": null,
    "questao_61": null,
    "questao_62a": null,
    "questao_62b": null,
    "questao_62c": null,
    "questao_62d": null,
    "questao_62e": null,
    "questao_62f": null,
    "questao_62g": null,
    "questao_62h": null,
    "questao_62i": null,
    "questao_62j": null,
    "questao_62k": null,
    "questao_63a": null,
    "questao_63b": null,
    "questao_63c": null,
    "questao_63d": null,
    "questao_63e": null,
    "questao_63f": null,
    "questao_63g": null,
    "questao_63h": null,
    "questao_63i": null,
    "questao_64": null,
    "questao_65": null,
    "questao_66": null,
    "questao_67": null,
    "questao_68": null,
    "moradores": []
};

var morador = {
    "questao_69": null,
    "questao_70": null,
    "questao_71": null,
    "questao_72": null,
    "questao_73": null,
    "questao_74": null,
    "questao_75": null,
    "questao_76": null,
    "questao_77": null,
    "questao_78": null,
    "questao_79": null,
    "questao_80": null,
    "questao_81": null,
    "questao_82": null,
    "questao_83": null,
    "questao_84": null,
    "questao_85": null,
    "questao_86": null,
    "questao_87": null,
    "questao_88": null,
    "questao_89": null,
    "questao_90": null,
    "questao_91": null,
    "questao_92": null,
    "questao_93": null,
    "questao_93_secundaria": null
};

var createFile = (callback) => {
    var id = new Date().getTime();
    var file_path = dir_file + id + '.json';
    fs.exists(file_path).then((exist) => {
        if(exist){
            createFile();
        }else{
            json = quiz;
            json['id'] = id;
            var data = JSON.stringify(json);
            fs.createFile(file_path, data, 'utf8');
            return callback(id);
        }
    }).catch((err) => {
        console.log(err);
    });
}

var readFile = (id, callback) => {
    var file_path = dir_file + id + '.json';

    fs.readFile(file_path, 'utf8').then((data) => {
        var json = JSON.parse(data);
        return callback(json);
    }).catch((err) => {
        console.log(err);
    });
};

var saveFile = (id, quiz) => {
    var file_path = dir_file + id + '.json';
    var data = JSON.stringify(json);
    fs.writeFile(file_path, data, 'utf8').then(() => {
        console.log('Arquivo atualizado');
    });
};

var deleteFile = (id) => {
    var file_path = dir_file + id + '.json';

    fs.unlink(file_path).then(() => {
        console.log('Arquivo deletado');
    }).catch((error) => {
        console.log(error);
    })
};

export var model = {
    quiz: quiz,
    morador: morador,
    createFile: createFile,
    readFile: readFile,
    saveFile: saveFile,
    deleteFile: deleteFile
};

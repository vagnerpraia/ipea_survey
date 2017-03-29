//var fs = require('fs');

export var model = {
    quiz: {
        nome_aplicador: ''
    },
    readFile: readFile,
    deleteFile: deleteFile,
    saveFile: saveFile
}

var readFile = (filename, content) => {
}

var deleteFile = (filename) => {
    /*
    path = RNFS.DocumentDirectoryPath + '/' + filename + '.json';

    return RNFS.unlink(path)
        .then(() => {
            console.log('FILE DELETED');
        })
        .catch((err) => {
            console.log(err.message);
        });
    */
};

var saveFile = (filename, content) => {
    /*
    fs.mkdir('/hello', function(err) {
    	if (err) throw err;
    	fs.writeFile('/hello/world.txt', 'world', function(err) {
    		if (err) throw err;
    		fs.readFile('/hello/world.txt', 'utf-8', function(err, data) {
    			console.log(data);
    		});
    	});
    });
    */
};

export const questions = [
    {
        id: '1',
        pergunta: 'Tipo de domicílio:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Casa', value: 0, observacao: ''},
            {label: 'Casa de agrovila', value: 1, observacao: ''},
            {label: 'Apartamento', value: 2, observacao: ''},
            {label: 'Cômodo ou peça', value: 3, observacao: ''},
            {label: 'Barraca ou tenda', value: 4, observacao: ''},
            {label: 'Alojamento', value: 5, observacao: ''},
            {label: 'Hotel/pensão/albergue', value: 6, observacao: ''},
            {label: 'Oca ou maloca (para terras indígenas)', value: 7, observacao: ''},
            {label: 'Outro', value: 8, observacao: ''},
            {label: 'Não sabe', value: 9, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '2',
        pergunta: 'O atual domicílio é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Próprio – já pago', value: 0, observacao: ''},
            {label: 'Próprio – ainda pagando', value: 1, observacao: ''},
            {label: 'Alugado', value: 2, observacao: ''},
            {label: 'Cedido por empregador', value: 3, observacao: ''},
            {label: 'Cedido de outra forma', value: 4, observacao: ''},
            {label: 'Ocupado/invadido', value: 5, observacao: ''},
            {label: 'Outro', value: 6, observacao: ''},
            {label: 'Não sabe', value: 7, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '3',
        pergunta: 'A família possui documento por escrito do imóvel atual?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: 'Passe para a questão 5'},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '4',
        pergunta: 'Qual documento a família possui do imóvel atual?',
        observacao_pergunta: 'Somente documento “por escrito”',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Escritura no Cartório de Registro de Imóveis', value: 0, observacao: ''},
            {label: 'Registro no Cartório Civil comum', value: 1, observacao: ''},
            {label: 'Contrato de compra e venda', value: 2, observacao: ''},
            {label: 'Recibo de gaveta', value: 3, observacao: ''},
            {label: 'Título de domínio', value: 4, observacao: ''},
            {label: 'Cessão/concessão de uso', value: 5, observacao: ''},
            {label: 'Contrato de aluguel', value: 6, observacao: ''},
            {label: 'Aluguel informal no papel', value: 7, observacao: ''},
            {label: 'Autorização/comodato no papel', value: 8, observacao: ''},
            {label: 'Somente comprovante de conta de luz, água, telefone, impostos ou taxas', value: 9, observacao: ''},
            {label: 'Outro', value: 10, observacao: ''},
            {label: 'Não sabe', value: 11, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '5a',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Área industrial',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '5b',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Estrada de grande circulação de veículos',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '5c',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Estrada de ferro em uso',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '5d',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Encosta ou área sujeita a deslizamento',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '5e',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Esgoto a céu aberto ou valão',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '5f',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Lixão ou depósito de lixo tóxico ou perigoso',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '5g',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Rio, baía, lago, açude ou represa poluídos',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '5h',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Gasoduto ou oleoduto (rede ou depósito)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '5i',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Passagem de fios de alta tensão',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '6',
        pergunta: 'Qual é o material que predomina na construção das paredes externas desse domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Tijolo (ou assemelhado) com reboco', value: 0, observacao: ''},
            {label: 'Tijolo (ou assemelhado) sem reboco', value: 1, observacao: ''},
            {label: 'Placas de concreto', value: 2, observacao: ''},
            {label: 'Madeira apropriada para construção', value: 3, observacao: ''},
            {label: 'Madeira aproveitada (tapume, embalagens, andaimes...)', value: 4, observacao: ''},
            {label: 'Taipa com reboco', value: 5, observacao: ''},
            {label: 'Taipa sem reboco', value: 6, observacao: ''},
            {label: 'Palha', value: 7, observacao: ''},
            {label: 'Lona ou plástico', value: 8, observacao: ''},
            {label: 'Outro material (sapé, sucata, papelão...)', value: 9, observacao: ''},
            {label: 'Sem parede (para setores de terras indígenas)', value: 10, observacao: ''},
            {label: 'Não sabe', value: 11, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '7',
        pergunta: 'Qual é o material que predomina na cobertura (telhado) deste domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Telha', value: 0, observacao: ''},
            {label: 'Telha de fibrocimento (onduladas)', value: 1, observacao: ''},
            {label: 'Zinco/Chapa metálica', value: 2, observacao: ''},
            {label: 'Laje de concreto', value: 3, observacao: ''},
            {label: 'Madeira preparada para essa finalidade', value: 4, observacao: ''},
            {label: 'Madeira aproveitada (tapume, embalagens, andaimes...)', value: 5, observacao: ''},
            {label: 'Palha/sapé', value: 6, observacao: ''},
            {label: 'Outro material', value: 7, observacao: ''},
            {label: 'Não sabe', value: 8, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '8',
        pergunta: 'Qual é o material que predomina no piso deste domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Cerâmica/lajota/pedra/porcelanato', value: 0, observacao: ''},
            {label: 'Carpete/laminado', value: 1, observacao: ''},
            {label: 'Cimento', value: 2, observacao: ''},
            {label: 'Madeira preparada para essa finalidade', value: 3, observacao: ''},
            {label: 'Madeira aproveitada (tapume, embalagens, andaimes...)', value: 4, observacao: ''},
            {label: 'Terra (chão batido)', value: 5, observacao: ''},
            {label: 'Outro material', value: 6, observacao: ''},
            {label: 'Não sabe', value: 7, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9a',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Fogão a gás e/ou elétrico',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9b',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Ferro elétrico de passar roupa',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9c',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Geladeira',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9d',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Freezer',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9e',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'TV',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9f',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Aparelho de vídeo/DVD',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9g',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Rádio',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9h',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Chuveiro elétrico',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9i',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Liquidificador',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9j',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Máquina de lavar roupa',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9k',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Tanquinho',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9l',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Automóvel',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9m',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Motocicleta',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9n',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Bicicleta',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9o',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Canoa',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9p',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Barco (Rabeta, Voadeira)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9q',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Telefone fixo',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9r',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Celular',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9s',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Antena parabólica',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9t',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Computador',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '9u',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Internet',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '10',
        pergunta: 'Quantos cômodos tem este domicílio?',
        observacao_pergunta: 'Incluir banheiro e cozinha e não considerar corredor, varanda aberta e garagem',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_numeric'
    },
    {
        id: '11',
        pergunta: 'Quantos cômodos estão servindo permanentemente de dormitório para os moradores deste domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_numeric'
    },
    {
        id: '12',
        pergunta: 'Quantos banheiros de uso exclusivo dos moradores existem neste domicílio?',
        observacao_pergunta: 'Inclusive os localizados no terreno ou na propriedade',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_numeric'
    },
    {
        id: '13',
        pergunta: 'De que forma é feito o escoadouro deste(s) banheiro(s) ou sanitário(s)?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Rede coletora de esgoto ou pluvial', value: 0, observacao: ''},
            {label: 'Fossa séptica', value: 1, observacao: ''},
            {label: 'Fossa rudimentar', value: 2, observacao: ''},
            {label: 'Vala/rua', value: 3, observacao: ''},
            {label: 'Rio, lago ou mar', value: 4, observacao: ''},
            {label: 'Outra forma', value: 5, observacao: ''},
            {label: 'Não sabe', value: 6, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '14',
        pergunta: 'O lixo deste domicílio é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Coletado diretamente por serviço de limpeza', value: 0, observacao: ''},
            {label: 'Colocado em caçamba de serviço de limpeza', value: 1, observacao: ''},
            {label: 'Queimado ou enterrado na propriedade', value: 2, observacao: 'Passe para a questão 16'},
            {label: 'Queimado ou enterrado fora da propriedade', value: 3, observacao: 'Passe para a questão 16'},
            {label: 'Jogado no quintal', value: 4, observacao: 'Passe para a questão 16'},
            {label: 'Jogado em terreno baldio ou logradouro (rua)', value: 5, observacao: 'Passe para a questão 16'},
            {label: 'Jogado em rio, lago ou mar', value: 6, observacao: 'Passe para a questão 16'},
            {label: 'Tem outro destino', value: 7, observacao: 'Passe para a questão 16'},
            {label: 'Não sabe', value: 8, observacao: 'Não ler esta opção / Passe para a questão 16'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '15',
        pergunta: 'Com que frequência o lixo deste domicílio é coletado?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Diariamente', value: 0, observacao: ''},
            {label: 'Mais de uma vez por semana', value: 1, observacao: ''},
            {label: 'Uma vez por semana', value: 2, observacao: ''},
            {label: 'A cada quinze dias', value: 3, observacao: ''},
            {label: 'Não sabe', value: 4, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '16',
        pergunta: 'Qual a fonte de abastecimento de água utilizada neste domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Rede pública de distribuição (inclusive redes isoladas da zona rural quando mantidas por concessionárias ou poder público)', value: 0, observacao: ''},
            {label: 'Poço ou nascente na propriedade', value: 1, observacao: ''},
            {label: 'Poço ou nascente fora da propriedade', value: 2, observacao: ''},
            {label: 'Poço artesiano', value: 3, observacao: ''},
            {label: 'Água da chuva armazenada em cisterna', value: 4, observacao: ''},
            {label: 'Água da chuva armazenada de outra forma', value: 5, observacao: ''},
            {label: 'JCarro-pipa', value: 6, observacao: ''},
            {label: 'Rios, açudes, lagos, córregos e igarapés', value: 7, observacao: ''},
            {label: 'Chafariz (sistema de abastecimento coletivo)', value: 8, observacao: ''},
            {label: 'Outra', value: 9, observacao: ''},
            {label: 'Não sabe', value: 10, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'multiple'
    },
    {
        id: '17',
        pergunta: 'Neste domicílio existe água canalizada (encanada)?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim, em pelo menos um cômodo', value: 0, observacao: ''},
            {label: 'Sim, só na propriedade ou terreno', value: 1, observacao: ''},
            {label: 'Não', value: 2, observacao: ''},
            {label: 'Não sabe', value: 3, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '18',
        pergunta: 'Como os moradores do domicílio avaliam a qualidade da água que utiliza?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Muito boa', value: 0, observacao: ''},
            {label: 'Boa', value: 1, observacao: ''},
            {label: 'Regular', value: 2, observacao: ''},
            {label: 'Ruim', value: 3, observacao: ''},
            {label: 'Muito ruim', value: 4, observacao: ''},
            {label: 'Não sabe', value: 5, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '19',
        pergunta: 'A água para uso é suficiente para atender às necessidades da casa?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', value: 0, observacao: ''},
            {label: 'Não', value: 1, observacao: ''},
            {label: 'Não sabe', value: 2, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '20',
        pergunta: 'Costuma faltar água no domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim, com frequência', value: 0, observacao: ''},
            {label: 'Sim, às vezes', value: 1, observacao: ''},
            {label: 'Não', value: 2, observacao: ''},
            {label: 'Não sabe', value: 3, observacao: 'Não ler esta opção'},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '21',
        pergunta: 'Neste domicílio existe energia elétrica?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: 'Passe para a questão 27', value: 1},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '22',
        pergunta: 'Qual a origem (fonte) desta energia?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Companhia distribuidora', observacao: '', value: 0},
            {label: 'Solar', observacao: '', value: 1},
            {label: 'Eólica', observacao: '', value: 2},
            {label: 'Diesel/gasolina/gás', observacao: '', value: 3},
            {label: 'Biodiesel', observacao: '', value: 4},
            {label: 'Água (hídrica)', observacao: '', value: 5},
            {label: 'Outra', observacao: '', value: 6},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 7},
        ],
        pergunta_extensao: '',
        tipo: 'multiple'
    },
    {
        id: '23',
        pergunta: 'Em relação ao abastecimento e à qualidade da energia elétrica no seu domicílio, a situação é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Há disponibilidade de energia o ano todo em condições adequadas ao conforto da família', observacao: '', value: 0},
            {label: 'Há disponibilidade de energia, mas com quedas constantes (apagões) ou com pouca força', observacao: '', value: 1},
            {label: 'A energia é suficiente só para algumas horas do dia e/ou para algum aparelho/equipamento elétrico específico', observacao: '', value: 2},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 3},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '24',
        pergunta: 'O domicílio recebe conta de luz?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: 'Passe para a questão 27', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 27', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '25',
        pergunta: 'O valor da tarifa de energia elétrica paga é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Muito alto', observacao: '', value: 0},
            {label: 'Alto', observacao: '', value: 1},
            {label: 'Nem alto nem baixo', observacao: '', value: 2},
            {label: 'Baixo', observacao: '', value: 3},
            {label: 'Muito baixo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '26',
        pergunta: 'Qual o valor da última conta de luz recebida?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_money'
    },
    {
        id: '27',
        pergunta: 'Como está a condição do transporte coletivo que atende à comunidade onde o domicílio está localizado?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Muito boa', observacao: '', value: 0},
            {label: 'Boa', observacao: '', value: 1},
            {label: 'Regular', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Muito ruim', observacao: '', value: 4},
            {label: 'Não possui transporte coletivo', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '28',
        pergunta: 'O tempo de caminhada que é preciso fazer do local do domicílio até o local do ponto de ônibus é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Até 10 minutos', observacao: '', value: 0},
            {label: 'De 10 a 20 minutos', observacao: '', value: 1},
            {label: 'De 20 a 40 minutos', observacao: '', value: 2},
            {label: 'De 40 a 60 minutos', observacao: '', value: 3},
            {label: 'Mais de 60 minutos (1 hora)', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '29',
        pergunta: 'Qual a condição das estradas utilizadas pelos moradores para se deslocarem a partir do domicílio?',
        observacao_pergunta: 'Somente para quem mora na zona rural',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Muito boa', observacao: '', value: 0},
            {label: 'Boa', observacao: '', value: 1},
            {label: 'Regular', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Muito ruim', observacao: '', value: 4},
            {label: 'Utiliza o rio', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '30a',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Acesso à escola (distância, transporte)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '30b',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Estado geral da escola (infraestrutura, qualidade e tamanho das salas de aula, carteiras suficientes, água, luz, etc.)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '30c',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Quantidade de professores',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '30d',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Qualidade dos professores',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '30e',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Quantidade da merenda escolar servida',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '30f',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: ' Qualidade da merenda escolar servida',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '31',
        pergunta: 'Existem postos de saúde em funcionamento próximos ao domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '32',
        pergunta: 'Existem hospitais em funcionamento próximos ao domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '33',
        pergunta: 'Quando você vai a um posto de saúde ou a um hospital, encontra médico?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sempre', observacao: '', value: 0},
            {label: 'Quase sempre', observacao: '', value: 1},
            {label: 'Às vezes', observacao: '', value: 2},
            {label: 'Raramente', observacao: '', value: 3},
            {label: 'Nunca', observacao: '', value: 4},
            {label: 'Nunca foi a um posto de saúde ou hospital', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '34',
        pergunta: 'Nos últimos 12 meses, com que frequência o seu domicílio recebeu uma visita de algum agente de endemias?',
        observacao_pergunta: 'como a dengue, por exemplo',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '35',
        pergunta: 'Nos últimos 12 meses, com que frequência o domicílio recebeu a visita da equipe do programa de saúde da família (PSF) e/ou de agentes de saúde?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Uma ou mais vezes por semana', observacao: '', value: 0},
            {label: 'Uma vez a cada quinze dias', observacao: '', value: 1},
            {label: 'Uma vez por mês', observacao: '', value: 2},
            {label: 'Uma vez a cada bimestre (dois meses)', observacao: '', value: 3},
            {label: 'Uma vez a cada trimestre (três meses)', observacao: '', value: 4},
            {label: 'Duas vezes por ano ou menos', observacao: '', value: 5},
            {label: 'Nunca recebeu', observacao: '', value: 6},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 7},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '36',
        pergunta: 'Como você e os moradores do domicílio avaliam a atuação da equipe do programa saúde da família (PSF) ou dos agentes de saúde',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Muito boa', observacao: '', value: 0},
            {label: 'Boa', observacao: '', value: 1},
            {label: 'Regular', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Muito ruim', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '37',
        pergunta: 'Alguém do domicílio possui algum plano de saúde particular/privado?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '38a',
        pergunta: 'Em relação à saúde pública, avalie os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Acesso a hospital, posto de saúde ou UPAs (distância, transporte etc.)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '38b',
        pergunta: 'Em relação à saúde pública, avalie os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: ' Acesso a consultas médicas no hospital ou posto de saúde (tempo de espera, disponibilidade de médicos) ',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '38c',
        pergunta: 'Em relação à saúde pública, avalie os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Acesso a atendimentos mais simples (curativos, pontos, “tirar” pressão)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '38d',
        pergunta: 'Em relação à saúde pública, avalie os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Acesso a atendimentos mais complexos (ortopedia, cardiologia, cirurgia, internação)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '38e',
        pergunta: 'Em relação à saúde pública, avalie os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Disponibilidade de medicamentos no hospital ou posto de saúde.',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '39',
        pergunta: 'Alguém deste domicílio recebe Bolsa Família atualmente?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '40',
        pergunta: 'Alguém deste domicílio recebe aposentadoria, benefício previdenciário, ou pensão do INSS ou do governo estadual/municipal?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '41',
        pergunta: 'Há quanto tempo mora, sem interrupção, nesta região atingida por barragem?',
        observacao_pergunta: 'No caso de menos de 1 (um) ano de moradia, informe 0 (zero)',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_numeric'
    },
    {
        id: '42',
        pergunta: 'Com a construção da barragem, de que forma você e sua família foram atingidos?',
        observacao_pergunta: 'Não ler as opções. Após a primeira resposta, perguntar E o que mais? E apenas após esgotar as opções passar para as seguintes',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Perderam a propriedade ou a posse de área rural', observacao: 'Passe para a questão 44', value: 0},
            {label: 'Perderam a propriedade ou a posse de área urbana', observacao: 'Passe para a questão 44', value: 1},
            {label: 'Perderam a casa em que residiam', observacao: 'Passe para a questão 44', value: 2},
            {label: 'Perderam benfeitorias ou outras casas de sua propriedade ou posse', observacao: 'Passe para a questão 44', value: 3},
            {label: 'Sofreram danos (rachaduras, desmoronamentos) na casa ou em benfeitorias não desapropriadas', observacao: 'Passe para a questão 44', value: 4},
            {label: 'Perderam sua fonte de renda ou o trabalho', observacao: 'Passe para a questão 44', value: 5},
            {label: 'Perderam a capacidade produtiva das terras de parcela que sobrou do imóvel', observacao: 'Passe para a questão 44', value: 6},
            {label: 'A pesca foi prejudicada', observacao: 'Passe para a questão 44', value: 7},
            {label: 'Houve diminuição ou perderam acesso a outras áreas onde coletavam produtos que geravam renda', observacao: 'Passe para a questão 44', value: 8},
            {label: 'Houve diminuição ou perderam acesso a outras áreas onde coletavam produtos para o próprio consumo da família (inclusive lenha)', observacao: 'Passe para a questão 44', value: 9},
            {label: 'Tiveram estabelecimento comercial, de serviços ou industrial inviabilizado', observacao: 'Passe para a questão 44', value: 10},
            {label: 'Tiveram diminuição de renda', observacao: 'Passe para a questão 44', value: 11},
            {label: 'Outra', observacao: 'Indique qual abaixo / Passe para a questão 44', value: 12},
            {label: 'Não foram atingidos', observacao: 'Passe para a questão 47', value: 13},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 47', value: 14},
        ],
        pergunta_extensao: {
            pergunta: 'Se outra, indique qual:',
            referencia: 12
        },
        tipo: 'multiple'
    },
    {
        id: '43',
        pergunta: 'Em relação à pesca, após a construção da barragem, quais as maiores dificuldades encontradas?',
        observacao_pergunta: 'Não ler as opções. Após a primeira resposta, perguntar: E o que mais?',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Diminuiu a quantidade de peixes', observacao: '', value: 0},
            {label: 'Diminuiu a qualidade dos peixes', observacao: '', value: 1},
            {label: 'Surgiu ou aumentou a poluição das águas', observacao: '', value: 2},
            {label: 'Alterou-se o movimento das águas', observacao: '', value: 3},
            {label: 'Alterou-se a temperatura das águas', observacao: '', value: 4},
            {label: 'Aumentou ou foram criadas dificuldades na comercialização', observacao: '', value: 5},
            {label: 'Perdeu acesso a áreas de pesca', observacao: '', value: 6},
            {label: 'Outra', observacao: 'Indique qual abaixo', value: 7},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 8},
        ],
        pergunta_extensao: {
            pergunta: 'Se outra, indique qual:',
            referencia: 7
        },
        tipo: 'multiple'
    },
    {
        id: '44',
        pergunta: 'A empresa construtora da barragem reconheceu sua família como atingida?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Sim, somente parte da família', observacao: '', value: 1},
            {label: 'Não', observacao: 'Passe para a questão 47', value: 2},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 47', value: 3},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '45',
        pergunta: 'O reconhecimento pela empresa construtora como atingido por barragem ocorreu:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Antes de começar a obra', observacao: '', value: 0},
            {label: 'Durante a construção da barragem', observacao: '', value: 1},
            {label: 'Depois que o lago encheu', observacao: '', value: 2},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 3},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '46',
        pergunta: '. O reconhecimento da família, ou de parte da família, como atingida por barragem aconteceu:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Por iniciativa da empresa construtora', observacao: '', value: 0},
            {label: 'Após mobilização ou pressão de movimentos sociais', observacao: '', value: 1},
            {label: 'Por ação da justiça (sistema judiciário)', observacao: '', value: 2},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 3},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '47',
        pergunta: 'Com a construção da barragem, sua família precisou se mudar?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Não, vivemos no mesmo local', observacao: 'Passe para a questão 49', value: 0},
            {label: 'Não, nos mudamos por outro motivo', observacao: 'Passe para a questão 49', value: 1},
            {label: 'Sim, mudamos de uma área rural para outra área rural', observacao: '', value: 2},
            {label: 'Sim, mudamos de uma área rural para a cidade', observacao: '', value: 3},
            {label: 'Sim, mudamos dentro da mesma cidade ou para outra cidade', observacao: '', value: 4},
            {label: 'Sim, mudamos da cidade para uma área rural', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 49', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '48',
        pergunta: 'No novo local, a moradia foi:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Construída pela empresa responsável pela barragem', observacao: '', value: 0},
            {label: 'Construída por conta própria (com ou sem recurso/apoio da empresa)', observacao: '', value: 1},
            {label: 'Construída por movimento social através de mutirão', observacao: '', value: 2},
            {label: 'Construída por movimento social através de empreiteira', observacao: '', value: 3},
            {label: 'Já existia no novo local (imóvel usado)', observacao: '', value: 4},
            {label: 'É barraca de acampamento', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '49a',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Vizinhos/amigos',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Aumentou Muito', observacao: '', value: 0},
            {label: 'Aumentou Pouco', observacao: '', value: 1},
            {label: 'Ficou igual', observacao: '', value: 2},
            {label: 'Diminuiu Pouco', observacao: '', value: 3},
            {label: 'Diminuiu Muito', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '49b',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Local de trabalho atual',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Aumentou Muito', observacao: '', value: 0},
            {label: 'Aumentou Pouco', observacao: '', value: 1},
            {label: 'Ficou igual', observacao: '', value: 2},
            {label: 'Diminuiu Pouco', observacao: '', value: 3},
            {label: 'Diminuiu Muito', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '49c',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'A cidade mais próxima',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Aumentou Muito', observacao: '', value: 0},
            {label: 'Aumentou Pouco', observacao: '', value: 1},
            {label: 'Ficou igual', observacao: '', value: 2},
            {label: 'Diminuiu Pouco', observacao: '', value: 3},
            {label: 'Diminuiu Muito', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '49d',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'O posto de saúde',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Aumentou Muito', observacao: '', value: 0},
            {label: 'Aumentou Pouco', observacao: '', value: 1},
            {label: 'Ficou igual', observacao: '', value: 2},
            {label: 'Diminuiu Pouco', observacao: '', value: 3},
            {label: 'Diminuiu Muito', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '49e',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'A escola',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Aumentou Muito', observacao: '', value: 0},
            {label: 'Aumentou Pouco', observacao: '', value: 1},
            {label: 'Ficou igual', observacao: '', value: 2},
            {label: 'Diminuiu Pouco', observacao: '', value: 3},
            {label: 'Diminuiu Muito', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '49f',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'A igreja',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Aumentou Muito', observacao: '', value: 0},
            {label: 'Aumentou Pouco', observacao: '', value: 1},
            {label: 'Ficou igual', observacao: '', value: 2},
            {label: 'Diminuiu Pouco', observacao: '', value: 3},
            {label: 'Diminuiu Muito', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '49g',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'O rio',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Aumentou Muito', observacao: '', value: 0},
            {label: 'Aumentou Pouco', observacao: '', value: 1},
            {label: 'Ficou igual', observacao: '', value: 2},
            {label: 'Diminuiu Pouco', observacao: '', value: 3},
            {label: 'Diminuiu Muito', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '49h',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'O ponto de ônibus',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Aumentou Muito', observacao: '', value: 0},
            {label: 'Aumentou Pouco', observacao: '', value: 1},
            {label: 'Ficou igual', observacao: '', value: 2},
            {label: 'Diminuiu Pouco', observacao: '', value: 3},
            {label: 'Diminuiu Muito', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '50',
        pergunta: '. Com a construção da barragem, as formas de reparação recebida pela família foram:',
        observacao_pergunta: 'permite mais de uma opção',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Reassentamento em área rural', observacao: '', value: 0},
            {label: 'Realocação da moradia em área urbana', observacao: 'Passe para a questão 56', value: 1},
            {label: 'Realocação só do terreno/lote em área urbana', observacao: 'Passe para a questão 56', value: 2},
            {label: 'Indenização em dinheiro', observacao: 'Passe para a questão 52', value: 3},
            {label: 'Carta de crédito', observacao: 'Passe para a questão 52', value: 4},
            {label: 'Reparação em bens', observacao: 'Passe para a questão 57', value: 5},
            {label: 'Ainda em negociação', observacao: 'Passe para a questão 57', value: 6},
            {label: 'Não recebeu nenhuma reparação', observacao: 'Passe para a questão 57', value: 7},
            {label: 'Outra', observacao: 'Indique qual abaixo / Passe para a questão 57', value: 8},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 57', value: 9},
        ],
        pergunta_extensao: {
            pergunta: 'Se outra, indique qual:',
            referencia: 8
        },
        tipo: 'multiple'
    },
    {
        id: '51a',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            pergunta: 'Casa para moradia da família',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '51b',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            pergunta: 'Energia elétrica',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '51c',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            pergunta: 'Água encanada suficiente para consumo e produção',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '51d',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            pergunta: 'Galpão e instalações necessárias ao trabalho (benfeitorias)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '51e',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            pergunta: 'Estrada de acesso em boas condições',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '51f',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            pergunta: 'Área de plantio ou pasto preparado',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '51g',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            pergunta: 'Recursos para manutenção durante o período inicial da transição da produção (até a primeira colheita)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '51h',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            pergunta: 'Assistência técnica',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '52',
        pergunta: 'Qual o valor da indenização (em dinheiro) ou da carta de crédito recebida?',
        observacao_pergunta: '(registrar o valor de acordo com a moeda que o entrevistado informar – real, cruzado, cruzado novo, cruzeiro etc.',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_money'
    },
    {
        id: '53',
        pergunta: 'Em que ano foi recebida a indenização (em dinheiro) ou a carta de crédito?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_numeric'
    },
    {
        id: '54',
        pergunta: 'Com a indenização (dinheiro recebido) ou carta de crédito, a família adquiriu:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Uma casa na cidade', observacao: 'Passe para a questão 57', value: 0},
            {label: 'Somente um terreno em área urbana', observacao: 'Passe para a questão 57', value: 1},
            {label: 'Propriedade rural', observacao: '', value: 2},
            {label: 'Não comprou imóvel', observacao: 'Passe para a questão 57', value: 3},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 57', value: 4},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '55a',
        pergunta: 'Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'Após responder passar para questão 57',
        pergunta_secundaria: {
            pergunta: 'Casa para moradia',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '55b',
        pergunta: 'Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'após responder passar para questão 57',
        pergunta_secundaria: {
            pergunta: 'Energia elétrica',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '55c',
        pergunta: 'Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'Após responder passar para questão 57',
        pergunta_secundaria: {
            pergunta: 'Água encanada suficiente para consumo e produção',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '55d',
        pergunta: 'Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'Após responder passar para questão 57',
        pergunta_secundaria: {
            pergunta: 'Galpão e instalações necessárias ao trabalho (benfeitorias) ',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '55e',
        pergunta: 'Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'Após responder passar para questão 57',
        pergunta_secundaria: {
            pergunta: 'Estrada de acesso em boas condições',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '55f',
        pergunta: 'Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'Após responder passar para questão 57',
        pergunta_secundaria: {
            pergunta: 'Área de plantio ou pasto preparado',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '56',
        pergunta: 'No caso de realocação, o novo imóvel foi:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Indicado pela família ou comunidade', observacao: '', value: 0},
            {label: 'Indicado pela empresa', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '57',
        pergunta: 'Na escala em que 0 (zero) significa "insatisfeita" e 10 (dez) significa "satisfeita", como a família avalia a forma de reparação realizada pela empresa?',
        observacao_pergunta: 'Todos devem responder.',
        pergunta_secundaria: '',
        opcoes: [
            {label: '0', observacao: '', value: 0},
            {label: '1', observacao: '', value: 1},
            {label: '2', observacao: '', value: 2},
            {label: '3', observacao: '', value: 3},
            {label: '4', observacao: '', value: 4},
            {label: '5', observacao: '', value: 5},
            {label: '6', observacao: '', value: 6},
            {label: '7', observacao: '', value: 7},
            {label: '8', observacao: '', value: 8},
            {label: '9', observacao: '', value: 9},
            {label: '10', observacao: '', value: 10},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '58',
        pergunta: 'A reparação mais importante que ainda é necessária é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Casa', observacao: '', value: 0},
            {label: 'Só o terreno em área urbana', observacao: '', value: 1},
            {label: 'Terra em área rural (reassentamento com casa, água, luz, benfeitorias)', observacao: '', value: 2},
            {label: 'Indenização de benfeitorias ou de produção perdida', observacao: '', value: 3},
            {label: 'Benfeitorias e infraestrutura para viabilizar a produção (meio rural, inclusive pesca)', observacao: '', value: 4},
            {label: 'Recursos, assistência técnica e equipamentos para retomar a produção', observacao: '', value: 5},
            {label: 'Recursos para retomar ou ter o próprio negócio (comércio, serviços ou indústria)', observacao: '', value: 6},
            {label: 'Escritura do imóvel', observacao: '', value: 7},
            {label: 'Emprego', observacao: '', value: 8},
            {label: 'Outra', observacao: 'Indique qual abaixo', value: 9},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 10},
        ],
        pergunta_extensao: {
            pergunta: 'Se outra, indique qual:',
            referencia: 9
        },
        tipo: 'radio'
    },
    {
        id: '59',
        pergunta: 'Você ou algum outro residente deste domicílio trabalha com alguma forma de produção abaixo:',
        observacao_pergunta: 'permite mais de uma opção',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Agricultura (lavouras, fruticultura, floricultura, hortaliças...)', observacao: '', value: 0},
            {label: 'Atividade florestal', observacao: '', value: 1},
            {label: 'Extrativismo', observacao: '', value: 2},
            {label: 'Pecuária', observacao: '', value: 3},
            {label: 'Aquicultura', observacao: '', value: 4},
            {label: 'Pesca', observacao: 'Passe para a questão 62', value: 5},
            {label: 'Não ou somente como complemento, horta caseira, galinhas para consumo próprio, pesca eventual etc', observacao: 'Passe para a Lista de moradores do domicílio', value: 6},
            {label: 'Não sabe', observacao: 'Passe para a Lista de moradores do domicílio', value: 7},
        ],
        pergunta_extensao: '',
        tipo: 'multiple'
    },
    {
        id: '60',
        pergunta: 'A relação principal com a área utilizada para produção é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Proprietário', observacao: '', value: 0},
            {label: 'Parceleiro', observacao: '', value: 1},
            {label: 'Ocupante', observacao: '', value: 2},
            {label: 'Agregado', observacao: '', value: 3},
            {label: 'Arrendatário', observacao: '', value: 4},
            {label: 'Parceiro', observacao: '', value: 5},
            {label: 'Meeiro', observacao: '', value: 6},
            {label: 'Caseiro', observacao: '', value: 7},
            {label: 'Tem produção própria fora do lote, em área comunitária ou floresta pública ou rios ou lagos', observacao: '', value: 8},
            {label: 'Assalariado/Boia fria', observacao: 'Passe para a questão 69', value: 9},
            {label: 'Outro', observacao: '', value: 10},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 11},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '61',
        pergunta: 'Qual o tamanho da área?',
        observacao_pergunta: 'registrar a medida do tamanho que o informante disser para depois fazer a conversão conforme orientação no Manual',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_numeric'
    },
    {
        id: '62a',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Tamanho do lote (área útil)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '62b',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Fertilidade do solo',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '62c',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Quantidade de água disponível',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '62d',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Disponibilidade de maquinário e equipamentos produtivos',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '62e',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Disponibilidade de mão de obra',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '62f',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Disponibilidade de crédito',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '62g',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Conhecimentos das técnicas de produção',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '62h',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Assistência técnica',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '62i',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Preço recebido pelos produtos vendidos',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '62j',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Meios para transportar a produção',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '62k',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Meios de comercializar a produção',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Ótimo', observacao: '', value: 0},
            {label: 'Bom', observacao: '', value: 1},
            {label: 'Razoável', observacao: '', value: 2},
            {label: 'Ruim', observacao: '', value: 3},
            {label: 'Péssimo', observacao: '', value: 4},
            {label: 'Não se aplica', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '63a',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Trator',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '63b',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Carreta agrícola ',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '63c',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Arado/grade aradora/roçadeira',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '63d',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Plantadeira/adubadeira',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '63e',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Picadeira/forrageira/triturador',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '63f',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Carroça/carro de boi',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '63g',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Equipamentos de irrigação ',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '63h',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Barco/canoa',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '63i',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            pergunta: 'Motosserra',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '64',
        pergunta: 'A principal forma utilizada para venda dos produtos é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Venda direta ao consumidor (em feira ou de porta em porta)', observacao: '', value: 0},
            {label: 'Venda por meio de terceiros (atravessadores)', observacao: '', value: 1},
            {label: 'Direto para comerciantes', observacao: '', value: 2},
            {label: 'Por meio de cooperativa ou associação', observacao: '', value: 3},
            {label: 'Para agroindústria e/ou empresa privada/integrado', observacao: '', value: 4},
            {label: 'Programa de Aquisição de Alimentos (PAA)/CONAB', observacao: '', value: 5},
            {label: 'Programa Nacional de Alimentação Escolar (PNAE)/Merenda escolar', observacao: '', value: 6},
            {label: 'Não faz venda', observacao: 'Passe para a questão 68', value: 7},
            {label: 'Outras', observacao: '', value: 8},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 68', value: 9},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '65',
        pergunta: 'Atualmente, a maior dificuldade enfrentada para a comercialização da produção é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'A influência/presença dos atravessadores', observacao: '', value: 0},
            {label: 'Preços baixos', observacao: '', value: 1},
            {label: 'Burocracia', observacao: '', value: 2},
            {label: 'Exigências rigorosas (normas, embalagens, fiscalização sanitária etc.)', observacao: '', value: 3},
            {label: 'O volume é pequeno para o escoamento mais distante', observacao: '', value: 4},
            {label: 'Falta de envolvimento com uma associação para acessar o PAA/PNAE', observacao: '', value: 5},
            {label: 'Falta de assistência técnica e informação', observacao: '', value: 6},
            {label: 'Estradas ruins para fazer o escoamento do produto', observacao: '', value: 7},
            {label: 'Falta de transporte', observacao: '', value: 8},
            {label: 'Falta comprador', observacao: '', value: 9},
            {label: 'Outras', observacao: '', value: 10},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 11},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '66',
        pergunta: 'A propriedade recebe a visita de algum técnico para acompanhar a lavoura ou os animais?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sempre', observacao: '', value: 0},
            {label: 'Quase sempre', observacao: '', value: 1},
            {label: 'Às vezes', observacao: '', value: 2},
            {label: 'Raramente', observacao: '', value: 3},
            {label: 'Nunca', observacao: 'Passe para a questão 68', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 68', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '67',
        pergunta: 'O técnico que acompanha a produção tem vínculo com:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Emater', observacao: '', value: 0},
            {label: 'Embrapa', observacao: '', value: 1},
            {label: 'Sindicato dos Trabalhadores Rurais', observacao: '', value: 2},
            {label: 'Sindicato dos Produtores Rurais', observacao: '', value: 3},
            {label: 'Movimento social/sindical', observacao: '', value: 4},
            {label: 'É particular', observacao: '', value: 5},
            {label: 'Familiar', observacao: '', value: 6},
            {label: 'Casa do fazendeiro', observacao: '', value: 7},
            {label: 'Empresa de assistência técnica do governo estadual', observacao: '', value: 8},
            {label: 'Empresa dona da barragem', observacao: '', value: 9},
            {label: 'Outro', observacao: '', value: 10},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 11},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '68',
        pergunta: 'Considerando apenas as atividades agrícola, pecuária, florestal, extrativista, aquícola ou pesqueira (ou delas derivadas diretamente), quanto a família obteve, mais ou menos, por mês no ano passado?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_money'
    },
    {
        id: '69',
        pergunta: 'Qual é a relação de parentesco ou de convivência com a pessoa responsável pelo domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Responsável pelo domicílio', observacao: '', value: 0},
            {label: 'Cônjuge ou companheiro/a', observacao: '', value: 1},
            {label: 'Filho/a', observacao: '', value: 2},
            {label: 'Enteado/a', observacao: '', value: 3},
            {label: 'Genro ou nora', observacao: '', value: 4},
            {label: 'Pai, mãe, padrasto ou madrasta', observacao: '', value: 5},
            {label: 'Sogro/a', observacao: '', value: 6},
            {label: 'Neto/a', observacao: '', value: 7},
            {label: 'Bisneto/a', observacao: '', value: 8},
            {label: 'Irmão ou irmã', observacao: '', value: 9},
            {label: 'Avô ou avó', observacao: '', value: 10},
            {label: 'Outro parente', observacao: '', value: 11},
            {label: 'Convivente (sem ser parente, divide as despesas de alimentação e/ou moradia)', observacao: '', value: 12},
            {label: 'Agregado (não é parente da pessoa referência e NÃO PAGA hospedagem e alimentação)', observacao: '', value: 13},
            {label: 'Pensionista (não é parente da pessoa referencia do domicílio e PAGA hospedagem e alimentação)', observacao: '', value: 14},
            {label: 'Empregado/a doméstico/a', observacao: '', value: 15},
            {label: 'Parente do empregado doméstico', observacao: '', value: 16},
            {label: 'Individual em domicilio coletivo', observacao: '', value: 17},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 18},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '70',
        pergunta: 'Qual é o mês e ano do seu nascimento?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_numeric'
    },
    {
        id: '71',
        pergunta: 'Estado civil:',
        observacao_pergunta: 'Para pessoas de 10 anos ou mais idade',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Solteiro/a', observacao: '', value: 0},
            {label: 'Casado/a', observacao: '', value: 1},
            {label: 'União estável (vivem juntos)', observacao: '', value: 2},
            {label: 'Viúvo/a', observacao: '', value: 3},
            {label: 'Divorciado/a', observacao: '', value: 4},
            {label: 'Separado/desquitado/a', observacao: '', value: 5},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 6},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '72',
        pergunta: 'Sua cor ou raça é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Branca', observacao: '', value: 0},
            {label: 'Preta', observacao: '', value: 1},
            {label: 'Amarela', observacao: '', value: 2},
            {label: 'Parda', observacao: '', value: 3},
            {label: 'Indígena', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '73',
        pergunta: 'Qual a sua religião ou culto?',
        observacao_pergunta: 'Não ler as opções, assinalar de acordo com a resposta do informante',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Católica', observacao: '', value: 0},
          {label: 'Protestante ou Evangélica não Pentecostal', observacao: '', value: 1},
          {label: 'Evangélica Pentecostal', observacao: '', value: 2},
          {label: 'Luterana', observacao: '', value: 3},
          {label: 'Adventista', observacao: '', value: 4},
          {label: 'Espiritismo ou espiritualista', observacao: '', value: 5},
          {label: 'Mórmon', observacao: '', value: 6},
          {label: 'Testemunha de Jeová', observacao: '', value: 7},
          {label: 'Ortodoxa', observacao: '', value: 8},
          {label: 'Candomblé, Umbanda ou outra de matriz africana', observacao: '', value: 9},
          {label: 'Israelita', observacao: '', value: 10},
          {label: 'Muçulmana', observacao: '', value: 11},
          {label: 'Outra', observacao: '', value: 12},
          {label: 'Não tem religião', observacao: '', value: 13},
          {label: 'Não sabe', observacao: 'Não ler esta opção', value: 14},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '74',
        pergunta: 'Sabe ler e escrever?',
        observacao_pergunta: 'Para pessoas de 5 anos ou mais idade',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '75',
        pergunta: 'Frequenta escola ou creche?',
        observacao_pergunta: 'Para todas as pessoas',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim, pública', observacao: '', value: 0},
            {label: 'Sim, particular', observacao: '', value: 1},
            {label: 'Não, mas já frequentou', observacao: 'Passe para a questão 83', value: 2},
            {label: 'Não, nunca frequentou', observacao: 'Passe para a questão 85', value: 3},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 85', value: 4},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '76',
        pergunta: 'Qual é o curso que frequenta?',
        observacao_pergunta: 'Para pessoa que frequenta escola ou creche',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Creche', observacao: 'Passe para a questão 79', value: 0},
            {label: 'Pré-escolar maternal e jardim de infância', observacao: 'Passe para a questão 79', value: 1},
            {label: 'Classe de alfabetização CA', observacao: 'Passe para a questão 79', value: 2},
            {label: 'Alfabetização de jovens e adultos', observacao: 'Passe para a questão 79', value: 3},
            {label: 'Regular ensino fundamental (1º grau)', observacao: '', value: 4},
            {label: 'Regular ensino médio 2º grau', observacao: 'Passe para a questão 78', value: 5},
            {label: 'Ensino técnico', observacao: 'Passe para a questão 78', value: 6},
            {label: 'Educação de jovens e adultos EJA ou supletivo de ensino fundamental', observacao: 'Passe para a questão 79', value: 7},
            {label: 'Educação de jovens e adultos EJA ou supletivo de ensino médio', observacao: 'Passe para a questão 79', value: 8},
            {label: 'Superior', observacao: 'Passe para a questão 79', value: 9},
            {label: 'Especialização', observacao: 'Passe para a questão 79', value: 10},
            {label: 'Mestrado', observacao: 'Passe para a questão 79', value: 11},
            {label: 'Doutorado', observacao: 'Passe para a questão 79', value: 12},
            {label: 'Não soube informar', observacao: 'Não ler esta opção / Passe para a questão 79', value: 13},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '77',
        pergunta: 'Qual é a série/ano que frequenta?',
        observacao_pergunta: 'Para quem cursa o ensino fundamental, após passar para questão 79',
        pergunta_secundaria: '',
        opcoes: [
            {label: '1° ano', observacao: '', value: 0},
            {label: '1ª série/2° ano', observacao: '', value: 1},
            {label: '2ª série/3° ano', observacao: '', value: 2},
            {label: '3ª série/4° ano', observacao: '', value: 3},
            {label: '4ª série/5° ano', observacao: '', value: 4},
            {label: '5ª série/6° ano', observacao: '', value: 5},
            {label: '6ª série/7° ano', observacao: '', value: 6},
            {label: '7ª série/8° ano', observacao: '', value: 7},
            {label: '8ª série/9° ano', observacao: '', value: 8},
            {label: 'Curso não seriado', observacao: '', value: 9},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 10},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '78',
        pergunta: 'Qual a série que frequenta?',
        observacao_pergunta: 'Para quem cursa o ensino médio ou técnico',
        pergunta_secundaria: '',
        opcoes: [
            {label: '1ª série', observacao: '', value: 0},
            {label: '2ª série', observacao: '', value: 1},
            {label: '3ª série', observacao: '', value: 2},
            {label: '4ª série', observacao: '', value: 3},
            {label: 'Curso não seriado', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '79',
        pergunta: 'A creche, escola ou curso que frequenta está localizado em área:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Rural', observacao: '', value: 0},
            {label: 'Urbana', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '80',
        pergunta: 'A principal forma de locomoção utilizada para ir à creche/escola/curso é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'A pé (caminhando)', observacao: '', value: 0},
            {label: 'Carro', observacao: '', value: 1},
            {label: 'Moto', observacao: '', value: 2},
            {label: 'Bicicleta', observacao: '', value: 3},
            {label: 'Barco/lancha', observacao: '', value: 4},
            {label: 'Charrete/carroça', observacao: '', value: 5},
            {label: 'Animal', observacao: '', value: 6},
            {label: 'Ônibus coletivo', observacao: '', value: 7},
            {label: 'Transporte escolar público (ônibus, vans, lanchas/barcos ou bicicletas)', observacao: '', value: 8},
            {label: 'Transporte escolar particular', observacao: '', value: 9},
            {label: 'Caminhonete/caminhões do tipo "pau de arara"', observacao: '', value: 10},
            {label: 'Outro', observacao: '', value: 11},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 12},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '81',
        pergunta: 'Quanto tempo leva, em média, para fazer o percurso (ida e volta) do domicílio para a creche/escola/curso?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        pergunta_extensao: '',
        tipo: 'input_time'
    },
    {
        id: '82',
        pergunta: 'Como você avalia a distância existente entre o domicílio e a creche/escola/curso que você frequenta?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Muito distante', observacao: 'Passe para a questão 85', value: 0},
            {label: 'Distante', observacao: 'Passe para a questão 85', value: 1},
            {label: 'Nem distante nem próximo', observacao: 'Passe para a questão 85', value: 2},
            {label: 'Próximo', observacao: 'Passe para a questão 85', value: 3},
            {label: 'Muito próximo', observacao: 'Passe para a questão 85', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 85', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '83',
        pergunta: 'Qual a sua escolaridade?',
        observacao_pergunta: 'Para pessoa que não frequenta escola ou creche, mas já frequentou',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Creche, pré-escolar (maternal e jardim de infância), classe de alfabetização CA', observacao: 'Passe para a questão 85', value: 0},
            {label: 'Alfabetização de jovens e adultos', observacao: 'Passe para a questão 85', value: 1},
            {label: 'Ensino fundamental ou 1º grau incompleto', observacao: '', value: 2},
            {label: 'Ensino fundamental ou 1º grau completo', observacao: 'Passe para a questão 85', value: 3},
            {label: 'Educação de jovens e adultos ou supletivo do ensino fundamental (1º grau) incompleto', observacao: '', value: 4},
            {label: 'Educação de jovens e adultos ou supletivo do ensino fundamental (1º grau) completo', observacao: 'Passe para a questão 85', value: 5},
            {label: 'Ensino médio ou 2º grau incompleto', observacao: 'Passe para a questão 85', value: 6},
            {label: 'Ensino médio ou 2º grau', observacao: 'Passe para a questão 85', value: 7},
            {label: 'Educação de jovens e adultos ou supletivo do ensino médio (2º grau) incompleto', observacao: 'Passe para a questão 85', value: 8},
            {label: 'Educação de jovens e adultos ou supletivo do ensino médio (2º grau) completo', observacao: 'Passe para a questão 85', value: 9},
            {label: 'Superior incompleto', observacao: 'Passe para a questão 85', value: 10},
            {label: 'Superior completo', observacao: 'Passe para a questão 85', value: 11},
            {label: 'Especialização', observacao: 'Passe para a questão 85', value: 12},
            {label: 'Mestrado ou doutorado', observacao: 'Passe para a questão 85', value: 13},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 85', value: 14},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '84',
        pergunta: 'Até qual série/ano completou com aprovação?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: '1° ano', observacao: '', value: 0},
            {label: '1ª série/2° ano', observacao: '', value: 1},
            {label: '2ª série/3° ano', observacao: '', value: 2},
            {label: '3ª série/4° ano', observacao: '', value: 3},
            {label: '4ª série/5° ano', observacao: '', value: 4},
            {label: '5ª série/6° ano', observacao: '', value: 5},
            {label: '6ª série/7° ano', observacao: '', value: 6},
            {label: '7ª série/8° ano', observacao: '', value: 7},
            {label: '8ª série/9° ano', observacao: '', value: 8},
            {label: 'Curso não seriado', observacao: '', value: 9},
            {label: 'Nenhuma', observacao: '', value: 10},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 11},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '85',
        pergunta: 'Na semana passada o(a) Sr(a):',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Tinha um trabalho remunerado (que gerou renda, ganhou dinheiro)', observacao: '', value: 0},
            {label: 'Tinha um trabalho remunerado (que gerou renda, ganhou dinheiro), mas estava temporariamente afastado por algum motivo (férias, licença, greve, doença etc.)', observacao: '', value: 1},
            {label: 'Trabalhou apenas em tarefas de cultivo, pesca ou criação de animais destinados somente para alimentação das pessoas moradoras no domicílio.', observacao: '', value: 2},
            {label: 'Trabalhou apenas em tarefas de construção de prédio, cômodo, poço ou outras obras de construção destinadas somente ao próprio uso das pessoas moradoras no domicílio.', observacao: '', value: 3},
            {label: 'Trabalhou apenas em tarefas domésticas no próprio domicílio', observacao: '', value: 4},
            {label: 'Exerceu outro tipo de atividade não remunerada (que não gerou renda, dinheiro)', observacao: '', value: 5},
            {label: 'Não trabalhou, mas procurou trabalho remunerado (desempregado)', observacao: '', value: 6},
            {label: 'Não trabalhou e não procurou trabalho remunerado (inativo)', observacao: '', value: 7},
        ],
        pergunta_extensao: '',
        tipo: 'multiple'
    },

    {
        id: '86',
        pergunta: 'No trabalho da semana passada, você era:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Empregado com carteira assinada, fichado', observacao: 'Passe para a questão 93', value: 0},
            {label: 'Trabalhador doméstico com carteira assinada, fichado', observacao: 'Passe para a questão 93', value: 1},
            {label: 'Servidor público civil ou militar', observacao: 'Passe para a questão 93', value: 2},
            {label: 'Empregado sem carteira assinada, não fichado', observacao: 'Passe para a questão 92', value: 3},
            {label: 'Trabalhador doméstico sem carteira assinada, não fichado', observacao: 'Passe para a questão 92', value: 4},
            {label: 'Trabalhador por conta própria ou autônomo', observacao: 'Passe para a questão 92', value: 5},
            {label: 'Estagiário', observacao: 'Passe para a questão 92', value: 6},
            {label: 'Empregador', observacao: 'Passe para a questão 90', value: 7},
            {label: 'Não sabe', observacao: 'Não ler esta opção / Passe para a questão 92', value: 8},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '87',
        pergunta: 'Quantas pessoas empregava nesse trabalho?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: '1 a 2 pessoas', observacao: '', value: 0},
            {label: '3 a 5 pessoas', observacao: '', value: 1},
            {label: '5 a 7 pessoas', observacao: '', value: 2},
            {label: '7 a 10 pessoas', observacao: '', value: 3},
            {label: '11 ou mais pessoas', observacao: '', value: 4},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 5},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '88',
        pergunta: 'No mês passado procurou por trabalho remunerado?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '89',
        pergunta: 'Era contribuinte de instituto de previdência oficial na semana passada?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: '', value: 0},
            {label: 'Não', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: '',
        tipo: 'radio'
    },
    {
        id: '90',
        pergunta: 'Teve alguma renda no último mês? Se sim, qual foi o rendimento bruto total que obteve no último mês? ',
        observacao_pergunta: 'Incluindo todas as fontes de renda: salário, seguro-desemprego, aposentadoria, pensão, mesada, aluguel, retirada mensal, bicos, extras, bolsa família etc.',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', observacao: 'Indique quanto abaixo', value: 0},
            {label: 'Não tem renda', observacao: '', value: 1},
            {label: 'Não sabe', observacao: 'Não ler esta opção', value: 2},
        ],
        pergunta_extensao: {
            pergunta: 'Se sim, indique quanto:',
            referencia: 1
        },
        tipo: 'radio'
    },
];

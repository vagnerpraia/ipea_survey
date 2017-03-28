export const questions = [
    {
        id: 'id',
        pergunta: '',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'quiz_id'
    },
    {
        id: '1',
        pergunta: 'Tipo de domicílio:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Casa', value: 1},
            {label: 'Casa de agrovila', value: 2},
            {label: 'Apartamento', value: 3},
            {label: 'Cômodo ou peça', value: 4},
            {label: 'Barraca ou tenda', value: 5},
            {label: 'Alojamento', value: 6},
            {label: 'Hotel/pensão/albergue', value: 7},
            {label: 'Oca ou maloca (para terras indígenas)', value: 8},
            {label: 'Outro', value: 9},
            {label: 'Não sabe', value: 10},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '2',
        pergunta: 'O atual domicílio é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Próprio – já pago', value: 1},
            {label: 'Próprio – ainda pagando', value: 2},
            {label: 'Alugado', value: 3},
            {label: 'Cedido por empregador', value: 4},
            {label: 'Cedido de outra forma', value: 5},
            {label: 'Ocupado/invadido', value: 6},
            {label: 'Outro', value: 7},
            {label: 'Não sabe', value: 8},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '3',
        pergunta: 'A família possui documento por escrito do imóvel atual?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '4',
        pergunta: 'Qual documento a família possui do imóvel atual?',
        observacao_pergunta: 'Somente documento “por escrito”',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Escritura no Cartório de Registro de Imóveis', value: 1},
            {label: 'Registro no Cartório Civil comum', value: 2},
            {label: 'Contrato de compra e venda', value: 3},
            {label: 'Recibo de gaveta', value: 4},
            {label: 'Título de domínio', value: 5},
            {label: 'Cessão/concessão de uso', value: 6},
            {label: 'Contrato de aluguel', value: 7},
            {label: 'Aluguel informal no papel', value: 8},
            {label: 'Autorização/comodato no papel', value: 9},
            {label: 'Somente comprovante de conta de luz, água, telefone, impostos ou taxas', value: 10 },
            {label: 'Outro', value: 11},
            {label: 'Não sabe', value: 12},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '5',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'A',
            pergunta: 'Área industrial',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '5',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'B',
            pergunta: 'Estrada de grande circulação de veículos',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '5',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'C',
            pergunta: 'Estrada de ferro em uso',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '5',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'D',
            pergunta: 'Encosta ou área sujeita a deslizamento',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '5',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'E',
            pergunta: 'Esgoto a céu aberto ou valão',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '5',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'F',
            pergunta: 'Lixão ou depósito de lixo tóxico ou perigoso',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '5',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'G',
            pergunta: 'Rio, baía, lago, açude ou represa poluídos',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '5',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'H',
            pergunta: 'Gasoduto ou oleoduto (rede ou depósito)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '5',
        pergunta: 'Este domicílio está localizado em/ou próximo a alguma destas áreas de risco?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'I',
            pergunta: 'Passagem de fios de alta tensão',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '6',
        pergunta: 'Qual é o material que predomina na construção das paredes externas desse domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Tijolo (ou assemelhado) com reboco', value: 1},
            {label: 'Tijolo (ou assemelhado) sem reboco', value: 2},
            {label: 'Placas de concreto', value: 3},
            {label: 'Madeira apropriada para construção', value: 4},
            {label: 'Madeira aproveitada (tapume, embalagens, andaimes...)', value: 5},
            {label: 'Taipa com reboco', value: 6},
            {label: 'Taipa sem reboco', value: 7},
            {label: 'Palha', value: 8},
            {label: 'Lona ou plástico', value: 9},
            {label: 'Outro material (sapé, sucata, papelão...)', value: 10},
            {label: 'Sem parede (para setores de terras indígenas)', value: 11},
            {label: 'Não sabe', value: 12},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '7',
        pergunta: 'Qual é o material que predomina na cobertura (telhado) deste domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Telha', value: 1},
            {label: 'Telha de fibrocimento (onduladas)', value: 2},
            {label: 'Zinco/Chapa metálica', value: 3},
            {label: 'Laje de concreto', value: 4},
            {label: 'Madeira preparada para essa finalidade', value: 5},
            {label: 'Madeira aproveitada (tapume, embalagens, andaimes...)', value: 6},
            {label: 'Palha/sapé', value: 7},
            {label: 'Outro material', value: 8},
            {label: 'Não sabe', value:9},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '8',
        pergunta: 'Qual é o material que predomina no piso deste domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Cerâmica/lajota/pedra/porcelanato', value: 1},
            {label: 'Carpete/laminado', value: 2},
            {label: 'Cimento', value: 3},
            {label: 'Madeira preparada para essa finalidade', value: 4},
            {label: 'Madeira aproveitada (tapume, embalagens, andaimes...)', value: 5},
            {label: 'Terra (chão batido)', value: 6},
            {label: 'Outro material', value: 7},
            {label: 'Não sabe', value: 8},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'A',
            pergunta: 'Fogão a gás e/ou elétrico',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'B',
            pergunta: 'Ferro elétrico de passar roupa',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'C',
            pergunta: 'Geladeira',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'D',
            pergunta: 'Freezer',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'E',
            pergunta: 'TV',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'F',
            pergunta: 'Aparelho de vídeo/DVD',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'G',
            pergunta: 'Rádio',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'H',
            pergunta: 'Chuveiro elétrico',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'I',
            pergunta: 'Liquidificador',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'J',
            pergunta: 'Máquina de lavar roupa',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'K',
            pergunta: 'Tanquinho',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'L',
            pergunta: 'Automóvel',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'M',
            pergunta: 'Motocicleta',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'N',
            pergunta: 'Bicicleta',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'O',
            pergunta: 'Canoa',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'P',
            pergunta: 'Barco (Rabeta, Voadeira)',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'Q',
            pergunta: 'Telefone fixo',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'R',
            pergunta: 'Celular',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'S',
            pergunta: 'Antena parabólica',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'T',
            pergunta: 'Computador',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '9',
        pergunta: 'O que tem no seu domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'U',
            pergunta: 'Internet',
            observacao_pergunta: '',
        },
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '10',
        pergunta: 'Quantos cômodos tem este domicílio?',
        observacao_pergunta: 'Incluir banheiro e cozinha e não considerar corredor, varanda aberta e garagem',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_numeric',
        observacao_tipo: {
            max_length: 2,
        },
    },
    {
        id: '11',
        pergunta: 'Quantos cômodos estão servindo permanentemente de dormitório para os moradores deste domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_numeric',
        observacao_tipo: {
            max_length: 2,
        },
    },
    {
        id: '12',
        pergunta: 'Quantos banheiros de uso exclusivo dos moradores existem neste domicílio?',
        observacao_pergunta: 'Inclusive os localizados no terreno ou na propriedade',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_numeric',
        observacao_tipo: {
            max_length: 1,
        },
    },
    {
        id: '13',
        pergunta: 'De que forma é feito o escoadouro deste(s) banheiro(s) ou sanitário(s)?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Rede coletora de esgoto ou pluvial', value: 1},
            {label: 'Fossa séptica', value: 2},
            {label: 'Fossa rudimentar', value: 3},
            {label: 'Vala/rua', value: 4},
            {label: 'Rio, lago ou mar', value: 5},
            {label: 'Outra forma', value: 6},
            {label: 'Não sabe', value: 7},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '14',
        pergunta: 'O lixo deste domicílio é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Coletado diretamente por serviço de limpeza', value: 1},
            {label: 'Colocado em caçamba de serviço de limpeza', value: 2},
            {label: 'Queimado ou enterrado na propriedade (passe para a questão 16)', value: 3},
            {label: 'Queimado ou enterrado fora da propriedade (passe para a questão 16)', value: 4},
            {label: 'Jogado no quintal (passe para a questão 16)', value: 5},
            {label: 'Jogado em terreno baldio ou logradouro (rua) (passe para a questão 16)', value: 6},
            {label: 'Jogado em rio, lago ou mar (passe para a questão 16)', value: 7},
            {label: 'Tem outro destino (passe para a questão 16)', value: 8},
            {label: 'Não sabe (passe para a questão 16)', value: 9},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '15',
        pergunta: 'Com que frequência o lixo deste domicílio é coletado?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Diariamente', value: 1},
            {label: 'Mais de uma vez por semana', value: 2},
            {label: 'Uma vez por semana', value: 3},
            {label: 'A cada quinze dias', value: 4},
            {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '16',
        pergunta: 'Qual a fonte de abastecimento de água utilizada neste domicílio hoje?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Rede pública de distribuição (inclusive redes isoladas da zona rural quando mantidas por concessionárias ou poder público)', value: 1},
            {label: 'Poço ou nascente na propriedade', value: 2},
            {label: 'Poço ou nascente fora da propriedade', value: 3},
            {label: 'Poço artesiano', value: 4},
            {label: 'Água da chuva armazenada em cisterna', value: 5},
            {label: 'Água da chuva armazenada de outra forma', value: 6},
            {label: 'JCarro-pipa', value: 7},
            {label: 'Rios, açudes, lagos, córregos e igarapés', value: 8},
            {label: 'Chafariz (sistema de abastecimento coletivo)', value: 9},
            {label: 'Outra', value: 10},
            {label: 'Não sabe', value: 11},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '17',
        pergunta: 'Neste domicílio existe água canalizada (encanada)?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim, em pelo menos um cômodo', value: 1},
            {label: 'Sim, só na propriedade ou terreno', value: 2},
            {label: 'Não', value: 3},
            {label: 'Não sabe', value: 4},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '18',
        pergunta: 'Como os moradores do domicílio avaliam a qualidade da água que utiliza?',
        observacao_pergunta: 'User cartão 1',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Muito boa', value: 1},
            {label: 'Boa', value: 2},
            {label: 'Regular', value: 3},
            {label: 'Ruim', value: 4},
            {label: 'Muito ruim', value: 5},
            {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '19',
        pergunta: 'A água para uso é suficiente para atender às necessidades da casa?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '20',
        pergunta: 'Costuma faltar água no domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim, com frequência', value: 1},
            {label: 'Sim, às vezes', value: 2},
            {label: 'Não', value: 3},
            {label: 'Não sabe', value: 4},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
];

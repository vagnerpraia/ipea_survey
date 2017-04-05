export const questions = [
    {
        id: '1',
        pergunta: 'Tipo de domicílio:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Casa', value: 0},
            {label: 'Casa de agrovila', value: 1},
            {label: 'Apartamento', value: 2},
            {label: 'Cômodo ou peça', value: 3},
            {label: 'Barraca ou tenda', value: 4},
            {label: 'Alojamento', value: 5},
            {label: 'Hotel/pensão/albergue', value: 6},
            {label: 'Oca ou maloca (para terras indígenas)', value: 7},
            {label: 'Outro', value: 8},
            {label: 'Não sabe', value: 9},
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
            {label: 'Próprio – já pago', value: 0},
            {label: 'Próprio – ainda pagando', value: 1},
            {label: 'Alugado', value: 2},
            {label: 'Cedido por empregador', value: 3},
            {label: 'Cedido de outra forma', value: 4},
            {label: 'Ocupado/invadido', value: 5},
            {label: 'Outro', value: 6},
            {label: 'Não sabe', value: 7},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Escritura no Cartório de Registro de Imóveis', value: 0},
            {label: 'Registro no Cartório Civil comum', value: 1},
            {label: 'Contrato de compra e venda', value: 2},
            {label: 'Recibo de gaveta', value: 3},
            {label: 'Título de domínio', value: 4},
            {label: 'Cessão/concessão de uso', value: 5},
            {label: 'Contrato de aluguel', value: 6},
            {label: 'Aluguel informal no papel', value: 7},
            {label: 'Autorização/comodato no papel', value: 8},
            {label: 'Somente comprovante de conta de luz, água, telefone, impostos ou taxas', value: 9},
            {label: 'Outro', value: 10},
            {label: 'Não sabe', value: 11},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Tijolo (ou assemelhado) com reboco', value: 0},
            {label: 'Tijolo (ou assemelhado) sem reboco', value: 1},
            {label: 'Placas de concreto', value: 2},
            {label: 'Madeira apropriada para construção', value: 3},
            {label: 'Madeira aproveitada (tapume, embalagens, andaimes...)', value: 4},
            {label: 'Taipa com reboco', value: 5},
            {label: 'Taipa sem reboco', value: 6},
            {label: 'Palha', value: 7},
            {label: 'Lona ou plástico', value: 8},
            {label: 'Outro material (sapé, sucata, papelão...)', value: 9},
            {label: 'Sem parede (para setores de terras indígenas)', value: 10},
            {label: 'Não sabe', value: 11},
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
            {label: 'Telha', value: 0},
            {label: 'Telha de fibrocimento (onduladas)', value: 1},
            {label: 'Zinco/Chapa metálica', value: 2},
            {label: 'Laje de concreto', value: 3},
            {label: 'Madeira preparada para essa finalidade', value: 4},
            {label: 'Madeira aproveitada (tapume, embalagens, andaimes...)', value: 5},
            {label: 'Palha/sapé', value: 6},
            {label: 'Outro material', value: 7},
            {label: 'Não sabe', value: 8},
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
            {label: 'Cerâmica/lajota/pedra/porcelanato', value: 0},
            {label: 'Carpete/laminado', value: 1},
            {label: 'Cimento', value: 2},
            {label: 'Madeira preparada para essa finalidade', value: 3},
            {label: 'Madeira aproveitada (tapume, embalagens, andaimes...)', value: 4},
            {label: 'Terra (chão batido)', value: 5},
            {label: 'Outro material', value: 6},
            {label: 'Não sabe', value: 7},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
        tipo: 'input_numeric'
    },
    {
        id: '11',
        pergunta: 'Quantos cômodos estão servindo permanentemente de dormitório para os moradores deste domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_numeric'
    },
    {
        id: '12',
        pergunta: 'Quantos banheiros de uso exclusivo dos moradores existem neste domicílio?',
        observacao_pergunta: 'Inclusive os localizados no terreno ou na propriedade',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: 'Se 9 ou mais de 9, registre 9. Se não existir registre 0 (zero)',
        tipo: 'input_numeric'
    },
    {
        id: '13',
        pergunta: 'De que forma é feito o escoadouro deste(s) banheiro(s) ou sanitário(s)?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Rede coletora de esgoto ou pluvial', value: 0},
            {label: 'Fossa séptica', value: 1},
            {label: 'Fossa rudimentar', value: 2},
            {label: 'Vala/rua', value: 3},
            {label: 'Rio, lago ou mar', value: 4},
            {label: 'Outra forma', value: 5},
            {label: 'Não sabe', value: 6},
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
            {label: 'Coletado diretamente por serviço de limpeza', value: 0},
            {label: 'Colocado em caçamba de serviço de limpeza', value: 1},
            {label: 'Queimado ou enterrado na propriedade (passe para a questão 16)', value: 2},
            {label: 'Queimado ou enterrado fora da propriedade (passe para a questão 16)', value: 3},
            {label: 'Jogado no quintal (passe para a questão 16)', value: 4},
            {label: 'Jogado em terreno baldio ou logradouro (rua) (passe para a questão 16)', value: 5},
            {label: 'Jogado em rio, lago ou mar (passe para a questão 16)', value: 6},
            {label: 'Tem outro destino (passe para a questão 16)', value: 7},
            {label: 'Não sabe (passe para a questão 16)', value: 8},
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
            {label: 'Diariamente', value: 0},
            {label: 'Mais de uma vez por semana', value: 1},
            {label: 'Uma vez por semana', value: 2},
            {label: 'A cada quinze dias', value: 3},
            {label: 'Não sabe', value: 4},
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
            {label: 'Rede pública de distribuição (inclusive redes isoladas da zona rural quando mantidas por concessionárias ou poder público)', value: 0},
            {label: 'Poço ou nascente na propriedade', value: 1},
            {label: 'Poço ou nascente fora da propriedade', value: 2},
            {label: 'Poço artesiano', value: 3},
            {label: 'Água da chuva armazenada em cisterna', value: 4},
            {label: 'Água da chuva armazenada de outra forma', value: 5},
            {label: 'JCarro-pipa', value: 6},
            {label: 'Rios, açudes, lagos, córregos e igarapés', value: 7},
            {label: 'Chafariz (sistema de abastecimento coletivo)', value: 8},
            {label: 'Outra', value: 9},
            {label: 'Não sabe', value: 10},
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
            {label: 'Sim, em pelo menos um cômodo', value: 0},
            {label: 'Sim, só na propriedade ou terreno', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
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
            {label: 'Muito boa', value: 0},
            {label: 'Boa', value: 1},
            {label: 'Regular', value: 2},
            {label: 'Ruim', value: 3},
            {label: 'Muito ruim', value: 4},
            {label: 'Não sabe', value: 5},
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
            {label: 'Sim', value: 0},
            {label: 'Não', value: 1},
            {label: 'Não sabe', value: 2},
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
            {label: 'Sim, com frequência', value: 0},
            {label: 'Sim, às vezes', value: 1},
            {label: 'Não', value: 2},
            {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '21',
        pergunta: 'Neste domicílio existe energia elétrica?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
            {label: 'Sim', value: 0},
            {label: 'Não (passe para a questão 27)', value: 1},
        ],
        observacao_opcoes: '',
        tipo: 'radio'
    },
    {
        id: '22',
        pergunta: 'Qual a origem (fonte) desta energia?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Companhia distribuidora', value: 0},
          {label: 'Solar', value: 1},
          {label: 'Eólica', value: 2},
          {label: 'Diesel/gasolina/gás', value: 3},
          {label: 'Biodiesel', value: 4},
          {label: 'Água (hídrica)', value: 5},
          {label: 'Outra', value: 6},
          {label: 'Não sabe', value: 7},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '23',
        pergunta: 'Em relação ao abastecimento e à qualidade da energia elétrica no seu domicílio, a situação é:',
        observacao_pergunta: 'usar o cartão 2',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Há disponibilidade de energia o ano todo em condições adequadas ao conforto da família', value: 0},
          {label: 'Há disponibilidade de energia, mas com quedas constantes (apagões) ou com pouca força', value: 1},
          {label: 'A energia é suficiente só para algumas horas do dia e/ou para algum aparelho/equipamento elétrico específico', value: 2},
          {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '24',
        pergunta: 'O domicílio recebe conta de luz?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não (passe para a questão 27)', value: 1},
          {label: 'Não sabe (passe para a questão 27)', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '25',
        pergunta: 'O valor da tarifa de energia elétrica paga é:',
        observacao_pergunta: 'usar o cartão 3',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Muito alto', value: 0},
          {label: 'Alto', value: 1},
          {label: 'Nem alto nem baixo', value: 2},
          {label: 'Baixo', value: 3},
          {label: 'Muito baixo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '26',
        pergunta: 'Qual o valor da última conta de luz recebida?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_money'
    },
    {
        id: '27',
        pergunta: 'Como está a condição do transporte coletivo que atende à comunidade onde o domicílio está localizado?',
        observacao_pergunta: 'usar o cartão 1',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Muito boa', value: 0},
          {label: 'Boa', value: 1},
          {label: 'Regular', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Muito ruim', value: 4},
          {label: 'Não possui transporte coletivo', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '28',
        pergunta: 'O tempo de caminhada que é preciso fazer do local do domicílio até o local do ponto de ônibus é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Até 10 minutos', value: 0},
          {label: 'De 10 a 20 minutos', value: 1},
          {label: 'De 20 a 40 minutos', value: 2},
          {label: 'De 40 a 60 minutos', value: 3},
          {label: 'Mais de 60 minutos (1 hora)', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '29',
        pergunta: 'Qual a condição das estradas utilizadas pelos moradores para se deslocarem a partir do domicílio?',
        observacao_pergunta: 'somente para quem mora na zona rural – (usar o cartão 1)',
        pergunta_secundaria: 'Um',
        opcoes: [
          {label: 'Muito boa', value: 0},
          {label: 'Boa', value: 1},
          {label: 'Regular', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Muito ruim', value: 4},
          {label: 'Utiliza o rio', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '30',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'A',
            pergunta: 'Acesso à escola (distância, transporte)',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '30',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'B',
            pergunta: 'Estado geral da escola (infraestrutura, qualidade e tamanho das salas de aula, carteiras suficientes, água, luz, etc.)',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '30',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'C',
            pergunta: 'Quantidade de professores',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '30',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'D',
            pergunta: 'Qualidade dos professores',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '30',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'E',
            pergunta: 'Quantidade da merenda escolar servida',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '30',
        pergunta: 'Em relação à educação, qual a avaliação sobre os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'F',
            pergunta: ' Qualidade da merenda escolar servida',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '31',
        pergunta: 'Existem postos de saúde em funcionamento próximos ao domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '32',
        pergunta: 'Existem hospitais em funcionamento próximos ao domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '33',
        pergunta: 'Quando você vai a um posto de saúde ou a um hospital, encontra médico?',
        observacao_pergunta: 'usar o cartão 4',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sempre', value: 0},
          {label: 'Quase sempre', value: 1},
          {label: 'Às vezes', value: 2},
          {label: 'Raramente', value: 3},
          {label: 'Nunca', value: 4},
          {label: 'Nunca foi a um posto de saúde ou hospital', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '34',
        pergunta: 'Alguém do domicílio possui plano de saúde particular?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '35',
        pergunta: 'O domicílio recebe a visita da equipe do programa saúde da família (PSF) e/ou de agentes de saúde?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não (passe para a questão 38)', value: 1},
          {label: 'Não sabe (passe para a questão 38)', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '36',
        pergunta: 'Com que frequência o domicílio recebe a visita da equipe do programa saúde da família (PSF) e/ou de agentes de saúde?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Uma ou mais vezes por semana', value: 0},
          {label: 'Uma vez a cada quinze dias', value: 1},
          {label: 'Uma vez por mês', value: 2},
          {label: 'Uma vez a cada bimestre (dois meses)', value: 3},
          {label: 'Uma vez a cada trimestre (três meses)', value: 4},
          {label: 'Duas vezes por ano ou menos', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '37',
        pergunta: 'Como você e os moradores do domicílio avaliam a atuação da equipe do programa saúde da família (PSF) ou dos agentes de saúde',
        observacao_pergunta: 'usar o cartão 1',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Muito boa', value: 0},
          {label: 'Boa', value: 1},
          {label: 'Regular', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Muito ruim', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '38',
        pergunta: 'Em relação à saúde pública, avalie os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'A',
            pergunta: 'Acesso a hospital, posto de saúde ou UPAs (distância, transporte etc.)',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '38',
        pergunta: 'Em relação à saúde pública, avalie os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'B',
            pergunta: ' Acesso a consultas médicas no hospital ou posto de saúde (tempo de espera, disponibilidade de médicos) ',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '38',
        pergunta: 'Em relação à saúde pública, avalie os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'C',
            pergunta: 'Acesso a atendimentos mais simples (curativos, pontos, “tirar” pressão)',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '38',
        pergunta: 'Em relação à saúde pública, avalie os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'D',
            pergunta: 'Acesso a atendimentos mais complexos (ortopedia, cardiologia, cirurgia, internação)',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '38',
        pergunta: 'Em relação à saúde pública, avalie os itens a seguir:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'E',
            pergunta: 'Disponibilidade de medicamentos no hospital ou posto de saúde.',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '39',
        pergunta: 'Alguém deste domicílio recebe Bolsa Família atualmente?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '40',
        pergunta: 'Alguém deste domicílio recebe aposentadoria, benefício previdenciário, ou pensão do INSS ou do governo estadual/municipal?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '41',
        pergunta: 'Há quanto tempo mora, sem interrupção, nesta região atingida por barragem?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: 'No caso de menos de 1 (um) ano de moradia, marque “00”',
        tipo: 'input_numeric'
    },
    {
        id: '42',
        pergunta: 'Com a construção da barragem, de que forma você e sua família foram atingidos?',
        observacao_pergunta: 'não ler as opções. Após a primeira resposta, perguntar: E o que mais? (permite mais de uma opção)',
        pergunta_secundaria: ' Qual?',
        opcoes: [
          {label: 'Perderam a propriedade ou a posse de área rural (passe para a questão 44)', value: 0},
          {label: 'Perderam a propriedade ou a posse de área urbana (passe para a questão 44)', value: 1},
          {label: 'Perderam a casa em que residiam (passe para a questão 44)', value: 2},
          {label: 'Perderam benfeitorias ou outras casas de sua propriedade ou posse (passe para a questão 44)', value: 3},
          {label: 'Sofreram danos (rachaduras, desmoronamentos) na casa ou em benfeitorias não desapropriadas (passe para a questão 44)', value: 4},
          {label: 'Perderam sua fonte de renda ou o trabalho (passe para a questão 44)', value: 5},
          {label: 'Perderam a capacidade produtiva das terras de parcela que sobrou do imóvel (passe para a questão 44)', value: 6},
          {label: 'A pesca foi prejudicada (passe para a questão 44)', value: 7},
          {label: 'Houve diminuição ou perderam acesso a outras áreas onde coletavam produtos que geravam renda (passe para a questão 44)', value: 8},
          {label: 'Houve diminuição ou perderam acesso a outras áreas onde coletavam produtos para o próprio consumo da família (inclusive lenha) (passe para a questão 44)', value: 9},
          {label: 'Tiveram estabelecimento comercial, de serviços ou industrial inviabilizado (passe para a questão 44)', value: 10},
          {label: 'Tiveram diminuição de renda (passe para a questão 44)', value: 11},
          {label: 'Outra. (passe para a questão 44)', value: 12},
          {label: 'Não foram atingidos (passe para a questão 47)', value: 13},
          {label: 'Não sabe (passe para a questão 47)', value: 14},
        ],
        opcoes_secundaria: '13',
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'multiple'
    },
    {
        id: '43',
        pergunta: 'Em relação à pesca, após a construção da barragem, quais as maiores dificuldades encontradas?',
        observacao_pergunta: 'não ler as opções. Após a primeira resposta, perguntar: E o que mais? (permite mais de uma opção)',
        pergunta_secundaria: 'Qual?',
        opcoes: [
          {label: 'Diminuiu a quantidade de peixes', value: 0},
          {label: 'Diminuiu a qualidade dos peixes', value: 1},
          {label: 'Surgiu ou aumentou a poluição das águas', value: 2},
          {label: 'Alterou-se o movimento das águas', value: 3},
          {label: 'Alterou-se a temperatura das águas', value: 4},
          {label: 'Aumentou ou foram criadas dificuldades na comercialização', value: 5},
          {label: 'Perdeu acesso a áreas de pesca', value: 6},
          {label: 'Outra.', value: 7},
          {label: 'Não sabe', value: 8},
        ],
        opcoes_secundaria: '8',
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'multiple'
    },
    {
        id: '44',
        pergunta: 'A empresa construtora da barragem reconheceu sua família como atingida?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Sim, somente parte da família', value: 1},
          {label: 'Não (passe para a questão 47)', value: 2},
          {label: 'Não sabe (passe para a questão 47)', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '45',
        pergunta: 'O reconhecimento pela empresa construtora como atingido por barragem ocorreu:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Antes de começar a obra', value: 0},
          {label: 'Durante a construção da barragem', value: 1},
          {label: 'Depois que o lago encheu', value: 2},
          {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '46',
        pergunta: '. O reconhecimento da família, ou de parte da família, como atingida por barragem aconteceu:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Por iniciativa da empresa construtora', value: 0},
          {label: 'Após mobilização ou pressão de movimentos sociais', value: 1},
          {label: 'Por ação da justiça (sistema judiciário)', value: 2},
          {label: 'Não sabe', value: 3},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '47',
        pergunta: 'Com a construção da barragem, sua família precisou se mudar?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Não, vivemos no mesmo local (passe para a questão 49)', value: 0},
          {label: 'Não, nos mudamos por outro motivo (passe para a questão 49)', value: 1},
          {label: 'Sim, mudamos de uma área rural para outra área rural', value: 2},
          {label: 'Sim, mudamos de uma área rural para a cidade', value: 3},
          {label: 'Sim, mudamos dentro da mesma cidade ou para outra cidade', value: 4},
          {label: 'Sim, mudamos da cidade para uma área rural', value: 5},
          {label: 'Não sabe (passe para a questão 49)', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '48',
        pergunta: 'No novo local, a moradia foi:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Construída pela empresa responsável pela barragem', value: 0},
          {label: 'Construída por conta própria (com ou sem recurso/apoio da empresa)', value: 1},
          {label: 'Construída por movimento social através de mutirão', value: 2},
          {label: 'Construída por movimento social através de empreiteira', value: 3},
          {label: 'Já existia no novo local (imóvel usado)', value: 4},
          {label: 'É barraca de acampamento', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '49',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'A',
            pergunta: 'Vizinhos/amigos',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Aumentou Muito', value: 0},
          {label: 'Aumentou Pouco', value: 1},
          {label: 'Ficou igual', value: 2},
          {label: 'Diminuiu Pouco', value: 3},
          {label: 'Diminuiu Muito', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '49',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'B',
            pergunta: 'Local de trabalho atual',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Aumentou Muito', value: 0},
          {label: 'Aumentou Pouco', value: 1},
          {label: 'Ficou igual', value: 2},
          {label: 'Diminuiu Pouco', value: 3},
          {label: 'Diminuiu Muito', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '49',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'C',
            pergunta: 'A cidade mais próxima',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Aumentou Muito', value: 0},
          {label: 'Aumentou Pouco', value: 1},
          {label: 'Ficou igual', value: 2},
          {label: 'Diminuiu Pouco', value: 3},
          {label: 'Diminuiu Muito', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '49',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'D',
            pergunta: 'O posto de saúde',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Aumentou Muito', value: 0},
          {label: 'Aumentou Pouco', value: 1},
          {label: 'Ficou igual', value: 2},
          {label: 'Diminuiu Pouco', value: 3},
          {label: 'Diminuiu Muito', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '49',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'E',
            pergunta: 'A escola',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Aumentou Muito', value: 0},
          {label: 'Aumentou Pouco', value: 1},
          {label: 'Ficou igual', value: 2},
          {label: 'Diminuiu Pouco', value: 3},
          {label: 'Diminuiu Muito', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '49',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'F',
            pergunta: 'A igreja',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Aumentou Muito', value: 0},
          {label: 'Aumentou Pouco', value: 1},
          {label: 'Ficou igual', value: 2},
          {label: 'Diminuiu Pouco', value: 3},
          {label: 'Diminuiu Muito', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '49',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'G',
            pergunta: 'O rio',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Aumentou Muito', value: 0},
          {label: 'Aumentou Pouco', value: 1},
          {label: 'Ficou igual', value: 2},
          {label: 'Diminuiu Pouco', value: 3},
          {label: 'Diminuiu Muito', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '49',
        pergunta: 'Com a construção da barragem, a distância entre o domicílio atual com:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'H',
            pergunta: 'O ponto de ônibus',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Aumentou Muito', value: 0},
          {label: 'Aumentou Pouco', value: 1},
          {label: 'Ficou igual', value: 2},
          {label: 'Diminuiu Pouco', value: 3},
          {label: 'Diminuiu Muito', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '50',
        pergunta: '. Com a construção da barragem, as formas de reparação recebida pela família foram:',
        observacao_pergunta: 'permite mais de uma opção',
        pergunta_secundaria: 'Qual?',
        opcoes: [
          {label: 'Reassentamento em área rural', value: 0},
          {label: 'Realocação da moradia em área urbana (passe para a questão 56)', value: 1},
          {label: 'Realocação só do terreno/lote em área urbana (passe para a questão 56)', value: 2},
          {label: 'Indenização em dinheiro (passe para a questão 52)', value: 3},
          {label: 'Carta de crédito (passe para a questão 52)', value: 4},
          {label: 'Reparação em bens (passe para a questão 57)', value: 5},
          {label: 'Ainda em negociação (passe para a questão 57)', value: 6},
          {label: 'Não recebeu nenhuma reparação (passe para a questão 57)', value: 7},
          {label: 'Outra. (passe para a questão 57)', value: 8},
          {label: 'Não sabe (passe para a questão 57)', value: 9},
        ],
        opcoes_secundaria: '9',
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'multiple'
    },
    {
        id: '51',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            id: 'A',
            pergunta: 'Casa para moradia da família',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '51',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            id: 'B',
            pergunta: 'Energia elétrica',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '51',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            id: 'C',
            pergunta: 'Água encanada suficiente para consumo e produção',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '51',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            id: 'D',
            pergunta: 'Galpão e instalações necessárias ao trabalho (benfeitorias)',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '51',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            id: 'E',
            pergunta: 'Estrada de acesso em boas condições',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '51',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            id: 'F',
            pergunta: 'Área de plantio ou pasto preparado',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '51',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            id: 'G',
            pergunta: 'Recursos para manutenção durante o período inicial da transição da produção (até a primeira colheita)',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '51',
        pergunta: 'No reassentamento em área rural, a área possuía ou foi fornecido(a):',
        observacao_pergunta: 'após responder passar para questão 56',
        pergunta_secundaria: {
            id: 'H',
            pergunta: 'Assistência técnica',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '52',
        pergunta: 'Qual o valor da indenização (em dinheiro) ou da carta de crédito recebida?',
        observacao_pergunta: '(registrar o valor de acordo com a moeda que o entrevistado informar – real, cruzado, cruzado novo, cruzeiro etc.',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_money'
    },
    {
        id: '53',
        pergunta: 'Em que ano foi recebida a indenização (em dinheiro) ou a carta de crédito?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_numeric'
    },
    {
        id: '54',
        pergunta: 'Com a indenização (dinheiro recebido) ou carta de crédito, a família adquiriu:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Uma casa na cidade (passe para a questão 57)', value: 0},
          {label: 'Somente um terreno em área urbana (passe para a questão 57)', value: 1},
          {label: 'Propriedade rural', value: 2},
          {label: 'Não comprou imóvel (passe para a questão 57)', value: 3},
          {label: 'Não sabe (passe para a questão 57)', value: 4},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '55',
        pergunta: '. Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'após responder passar para questão 57',
        pergunta_secundaria: {
            id: 'A',
            pergunta: 'Casa para moradia',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '55',
        pergunta: '. Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'após responder passar para questão 57',
        pergunta_secundaria: {
            id: 'B',
            pergunta: 'Energia elétrica',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '55',
        pergunta: '. Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'após responder passar para questão 57',
        pergunta_secundaria: {
            id: 'C',
            pergunta: 'Água encanada suficiente para consumo e produção',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '55',
        pergunta: '. Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'após responder passar para questão 57',
        pergunta_secundaria: {
            id: 'D',
            pergunta: 'Galpão e instalações necessárias ao trabalho (benfeitorias) ',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '55',
        pergunta: '. Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'após responder passar para questão 57',
        pergunta_secundaria: {
            id: 'E',
            pergunta: 'Estrada de acesso em boas condições',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '55',
        pergunta: 'Com a indenização (dinheiro recebido) ou carta de crédito, foi possível obter uma nova propriedade rural com:',
        observacao_pergunta: 'após responder passar para questão 57',
        pergunta_secundaria: {
            id: 'F',
            pergunta: 'Área de plantio ou pasto preparado',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '56',
        pergunta: 'No caso de realocação, o novo imóvel foi:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Indicado pela família ou comunidade', value: 0},
          {label: 'Indicado pela empresa', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '57',
        pergunta: 'Na escala em que “0” (zero) significa “insatisfeita” e “10” (dez) significa “satisfeita”, como a família avalia a forma de reparação realizada pela empresa?',
        observacao_pergunta: 'todos devem responder (usar o cartão 5)',
        pergunta_secundaria: '',
        opcoes: [
          {label: '0', value: 0},
          {label: '1', value: 1},
          {label: '2', value: 2},
          {label: '3', value: 3},
          {label: '4', value: 4},
          {label: '5', value: 5},
          {label: '6', value: 6},
          {label: '7', value: 7},
          {label: '8', value: 8},
          {label: '9', value: 9},
          {label: '10', value: 10},
        ],
        observacao_opcoes: 'passe para a questão 59',
        tipo: 'radio'
    },
    {
        id: '58',
        pergunta: 'A reparação mais importante que ainda é necessária é:',
        observacao_pergunta: 'marcar apenas uma alternativa',
        pergunta_secundaria: 'Qual?',
        opcoes: [
          {label: 'Casa', value: 0},
          {label: 'Só o terreno em área urbana', value: 1},
          {label: 'Terra em área rural (reassentamento com casa, água, luz, benfeitorias)', value: 2},
          {label: 'Indenização de benfeitorias ou de produção perdida', value: 3},
          {label: 'Benfeitorias e infraestrutura para viabilizar a produção (meio rural, inclusive pesca)', value: 4},
          {label: 'Recursos, assistência técnica e equipamentos para retomar a produção', value: 5},
          {label: 'Recursos para retomar ou ter o próprio negócio (comércio, serviços ou indústria)', value: 6},
          {label: 'Escritura do imóvel', value: 7},
          {label: 'Emprego', value: 8},
          {label: 'Outra:', value: 9},
          {label: 'Não sabe', value: 10},
        ],
        opcoes_secundaria: '10',
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '59',
        pergunta: 'Você ou algum outro residente deste domicílio trabalha com alguma forma de produção abaixo:',
        observacao_pergunta: 'permite mais de uma opção',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Agricultura (lavouras, fruticultura, floricultura, hortaliças...)', value: 0},
          {label: 'Atividade florestal', value: 1},
          {label: 'Extrativismo', value: 2},
          {label: 'Pecuária', value: 3},
          {label: 'Aquicultura', value: 4},
          {label: 'Pesca (passe para a questão 62)', value: 5},
          {label: 'Não ou somente como complemento, horta caseira, galinhas para consumo próprio, pesca eventual etc. (passe para a Lista de moradores do domicílio)', value: 6},
          {label: 'Não sabe (passe para a Lista de moradores do domicílio)', value: 7},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'multiple'
    },
    {
        id: '60',
        pergunta: 'A relação principal com a área utilizada para produção é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Proprietário', value: 0},
          {label: 'Parceleiro (passe para a questão 62)', value: 1},
          {label: 'Ocupante (passe para a questão 62)', value: 2},
          {label: 'Agregado (passe para a questão 62)', value: 3},
          {label: 'Arrendatário (passe para a questão 62)', value: 4},
          {label: 'Parceiro (passe para a questão 62)', value: 5},
          {label: 'Meeiro (passe para a questão 62)', value: 6},
          {label: 'Caseiro (passe para a questão 62)', value: 7},
          {label: 'Tem produção própria fora do lote, em área comunitária ou floresta pública ou rios ou lagos (passe para a questão 62)', value: 8},
          {label: 'Assalariado/Boia fria (passe para a questão 70)', value: 9},
          {label: 'Outro (passe para a questão 62)', value: 10},
          {label: 'Não sabe (passe para a questão 62)', value: 11},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '61',
        pergunta: 'Qual o tamanho da área?',
        observacao_pergunta: 'registrar a medida do tamanho que o informante disser para depois fazer a conversão conforme orientação no Manual',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_numeric'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'A',
            pergunta: 'Tamanho do lote (área útil)',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'B',
            pergunta: 'Fertilidade do solo',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'C',
            pergunta: 'Quantidade de água disponível',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'D',
            pergunta: 'Disponibilidade de maquinário e equipamentos produtivos',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'E',
            pergunta: 'Disponibilidade de mão de obra',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'F',
            pergunta: 'Disponibilidade de crédito',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'G',
            pergunta: 'Conhecimentos das técnicas de produção',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'H',
            pergunta: 'Assistência técnica',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'I',
            pergunta: 'Preço recebido pelos produtos vendidos',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'J',
            pergunta: 'Meios para transportar a produção',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '62',
        pergunta: 'Em relação às condições gerais de produção, qual a sua avaliação sobre os itens a seguir?',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'K',
            pergunta: 'Meios de comercializar a produção',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Ótimo', value: 0},
          {label: 'Bom', value: 1},
          {label: 'Razoável', value: 2},
          {label: 'Ruim', value: 3},
          {label: 'Péssimo', value: 4},
          {label: 'Não se aplica', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '63',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'A',
            pergunta: 'Trator',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '63',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'B',
            pergunta: 'Carreta agrícola ',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '63',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'C',
            pergunta: 'Arado/grade aradora/roçadeira',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '63',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'D',
            pergunta: 'Plantadeira/adubadeira',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '63',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'E',
            pergunta: 'Picadeira/forrageira/triturador',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '63',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'F',
            pergunta: 'Carroça/carro de boi',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '63',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'G',
            pergunta: 'Equipamentos de irrigação ',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '63',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'H',
            pergunta: 'Barco/canoa',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '63',
        pergunta: 'Para a produção, a família possui:',
        observacao_pergunta: '',
        pergunta_secundaria: {
            id: 'I',
            pergunta: 'Motosserra',
            observacao_pergunta: '',
        },
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '64',
        pergunta: 'A principal forma utilizada para venda dos produtos é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Venda direta ao consumidor (em feira ou de porta em porta)', value: 0},
          {label: 'Venda por meio de terceiros (atravessadores)', value: 1},
          {label: 'Direto para comerciantes', value: 2},
          {label: 'Por meio de cooperativa ou associação', value: 3},
          {label: 'Para agroindústria e/ou empresa privada/integrado', value: 4},
          {label: 'Programa de Aquisição de Alimentos (PAA)/CONAB', value: 5},
          {label: 'Programa Nacional de Alimentação Escolar (PNAE)/Merenda escolar', value: 6},
          {label: 'Não faz venda (passe para a questão 68)', value: 7},
          {label: 'Outras', value: 8},
          {label: 'Não sabe (passe para a questão 68)', value: 9},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '65',
        pergunta: 'Atualmente, a maior dificuldade enfrentada para a comercialização da produção é:',
        observacao_pergunta: 'marque até 3 opções',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'A influência/presença dos atravessadores', value: 0},
          {label: 'Preços baixos', value: 1},
          {label: 'Burocracia', value: 2},
          {label: 'Exigências rigorosas (normas, embalagens, fiscalização sanitária etc.)', value: 3},
          {label: 'O volume é pequeno para o escoamento mais distante', value: 4},
          {label: 'Falta de envolvimento com uma associação para acessar o PAA/PNAE', value: 5},
          {label: 'Falta de assistência técnica e informação', value: 6},
          {label: 'Estradas ruins para fazer o escoamento do produto', value: 7},
          {label: 'Falta de transporte', value: 8},
          {label: 'Falta comprador', value: 9},
          {label: 'Outras', value: 10},
          {label: 'Não sabe', value: 11},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '66',
        pergunta: 'A propriedade recebe a visita de algum técnico para acompanhar a lavoura ou os animais?',
        observacao_pergunta: 'usar o cartão 4',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sempre', value: 0},
          {label: 'Quase sempre', value: 1},
          {label: 'Às vezes', value: 2},
          {label: 'Raramente', value: 3},
          {label: 'Nunca (passe para a questão 68)', value: 4},
          {label: 'Não sabe (passe para a questão 68)', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '67',
        pergunta: 'O técnico que acompanha a produção tem vínculo com:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Emater', value: 0},
          {label: 'Embrapa', value: 1},
          {label: 'Sindicato dos Trabalhadores Rurais', value: 2},
          {label: 'Sindicato dos Produtores Rurais', value: 3},
          {label: 'Movimento social/sindical', value: 4},
          {label: 'É particular', value: 5},
          {label: 'Familiar', value: 6},
          {label: 'Casa do fazendeiro', value: 7},
          {label: 'Empresa de assistência técnica do governo estadual', value: 8},
          {label: 'Empresa dona da barragem', value: 9},
          {label: 'Outro', value: 10},
          {label: 'Não sabe', value: 11},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '68',
        pergunta: 'Considerando apenas as atividades agrícola, pecuária, florestal, extrativista, aquícola ou pesqueira (ou delas derivadas diretamente), quanto a família obteve, mais ou menos, por mês no ano passado?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_money'
    },
    {
        id: '69',
        pergunta: 'Qual é a relação de parentesco ou de convivência com a pessoa responsável pelo domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Responsável pelo domicílio', value: 0},
          {label: 'Cônjuge ou companheiro/a', value: 1},
          {label: 'Filho/a', value: 2},
          {label: 'Enteado/a', value: 3},
          {label: 'Genro ou nora', value: 4},
          {label: 'Pai, mãe, padrasto ou madrasta', value: 5},
          {label: 'Sogro/a', value: 6},
          {label: 'Neto/a', value: 7},
          {label: 'Bisneto/a', value: 8},
          {label: 'Irmão ou irmã', value: 9},
          {label: 'Avô ou avó ', value: 10},
          {label: 'Outro parente', value: 11},
          {label: 'Convivente (sem ser parente, divide as despesas de alimentação e/ou moradia)', value: 12},
          {label: 'Agregado (não é parente da pessoa referência e NÃO PAGA hospedagem e alimentação)', value: 13},
          {label: 'Pensionista (não é parente da pessoa referencia do domicílio e PAGA hospedagem e alimentação)', value: 14},
          {label: 'Empregado/a doméstico/a ', value: 15},
          {label: 'Parente do empregado doméstico', value: 16},
          {label: 'Individual em domicilio coletivo', value: 17},
          {label: 'Não sabe', value: 18},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '70',
        pergunta: 'Qual é o mês e ano do seu nascimento?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_numeric'
    },
    {
        id: '71',
        pergunta: 'Estado civil:',
        observacao_pergunta: 'para pessoas de 10 anos ou mais idade',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Solteiro/a', value: 0},
          {label: 'Casado/a', value: 1},
          {label: 'União estável (vivem juntos)', value: 2},
          {label: 'Viúvo/a', value: 3},
          {label: 'Divorciado/a', value: 4},
          {label: 'Separado/desquitado/a', value: 5},
          {label: 'Não sabe', value: 6},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '72',
        pergunta: 'Sua cor ou raça é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Branca', value: 0},
          {label: 'Preta', value: 1},
          {label: 'Amarela', value: 2},
          {label: 'Parda', value: 3},
          {label: 'Indígena', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '73',
        pergunta: 'Qual a sua religião ou culto?',
        observacao_pergunta: 'não ler as opções, assinalar de acordo com a resposta do informante',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Católica', value: 0},
          {label: 'Protestante ou Evangélica não Pentecostal', value: 1},
          {label: 'Evangélica Pentecostal', value: 2},
          {label: 'Luterana', value: 3},
          {label: 'Adventista', value: 4},
          {label: 'Espiritismo ou espiritualista', value: 5},
          {label: 'Mórmon', value: 6},
          {label: 'Testemunha de Jeová', value: 7},
          {label: 'Ortodoxa', value: 8},
          {label: 'Candomblé, Umbanda ou outra de matriz africana', value: 9},
          {label: 'Israelita', value: 10},
          {label: 'Muçulmana', value: 11},
          {label: 'Outra', value: 12},
          {label: 'Não tem religião', value: 13},
          {label: 'Não sabe', value: 14},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '74',
        pergunta: 'Sabe ler e escrever?',
        observacao_pergunta: 'para pessoas de 5 anos ou mais idade',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '75',
        pergunta: 'Frequenta escola ou creche?',
        observacao_pergunta: 'para todas as pessoas',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim, pública', value: 0},
          {label: 'Sim, particular', value: 1},
          {label: 'Não, mas já frequentou (passe para a questão 83)', value: 2},
          {label: 'Não, nunca frequentou (passe para a questão 85)', value: 3},
          {label: 'Não sabe (passe para a questão 85)', value: 4},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '76',
        pergunta: 'Qual é o curso que frequenta?',
        observacao_pergunta: 'para pessoa que frequenta escola ou creche',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Creche (passe para a questão 79)', value: 0},
          {label: 'Pré-escolar maternal e jardim de infância (passe para a questão 79)', value: 1},
          {label: 'Classe de alfabetização CA (passe para a questão 79)', value: 2},
          {label: 'Alfabetização de jovens e adultos (passe para a questão 79)', value: 3},
          {label: 'Regular ensino fundamental (1º grau)', value: 4},
          {label: 'Regular ensino médio 2º grau (passe para a questão 78)', value: 5},
          {label: 'Ensino técnico (passe para a questão 78)', value: 6},
          {label: 'Educação de jovens e adultos EJA ou supletivo de ensino fundamental  (passe para a questão 79)', value: 7},
          {label: 'Educação de jovens e adultos EJA ou supletivo de ensino médio (passe para a questão 79)', value: 8},
          {label: 'Superior (passe para a questão 79)', value: 9},
          {label: 'Especialização (passe para a questão 79)', value: 10},
          {label: 'Mestrado (passe para a questão 79)', value: 11},
          {label: 'Doutorado (passe para a questão 79)', value: 12},
          {label: 'Não soube informar (passe para a questão 79)', value: 13},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '77',
        pergunta: 'Qual é a série/ano que frequenta?',
        observacao_pergunta: 'Para quem cursa o ensino fundamental, após responder passar para questão 79',
        pergunta_secundaria: '',
        opcoes: [
          {label: '1° ano', value: 0},
          {label: '1ª série/2° ano', value: 1},
          {label: '2ª série/3° ano', value: 2},
          {label: '3ª série/4° ano', value: 3},
          {label: '4ª série/5° ano', value: 4},
          {label: '5ª série/6° ano', value: 5},
          {label: '6ª série/7° ano', value: 6},
          {label: '7ª série/8° ano', value: 7},
          {label: '8ª série/9° ano', value: 8},
          {label: 'Curso não seriado', value: 9},
          {label: 'Não sabe', value: 10},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '78',
        pergunta: 'Qual a série que frequenta?',
        observacao_pergunta: 'Para quem cursa o ensino médio ou técnico',
        pergunta_secundaria: '',
        opcoes: [
          {label: '1ª série', value: 0},
          {label: '2ª série', value: 1},
          {label: '3ª série', value: 2},
          {label: '4ª série', value: 3},
          {label: 'Curso não seriado', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '79',
        pergunta: 'A creche, escola ou curso que frequenta está localizado em área:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Rural', value: 0},
          {label: 'Urbana', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '80',
        pergunta: 'A principal forma de locomoção utilizada para ir à creche/escola/curso é:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'A pé (caminhando)', value: 0},
          {label: 'Carro', value: 1},
          {label: 'Moto', value: 2},
          {label: 'Bicicleta', value: 3},
          {label: 'Barco/lancha', value: 4},
          {label: 'Charrete/carroça', value: 5},
          {label: 'Animal', value: 6},
          {label: 'Ônibus coletivo ', value: 7},
          {label: 'Transporte escolar público (ônibus, vans, lanchas/barcos ou bicicletas)', value: 8},
          {label: 'Transporte escolar particular', value: 9},
          {label: 'Caminhonete/caminhões do tipo “pau de arara” ', value: 10},
          {label: 'Outro', value: 11},
          {label: 'Não sabe', value: 12},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '81',
        pergunta: 'Quanto tempo leva, em média, para fazer o percurso (ida e volta) do domicílio para a creche/escola/curso?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: '',
        observacao_opcoes: '',
        tipo: 'input_time'
    },
    {
        id: '82',
        pergunta: 'Como você avalia a distância existente entre o domicílio e a creche/escola/curso que você frequenta?',
        observacao_pergunta: 'usar o cartão 6',
        pergunta_secundaria: 'Um',
        opcoes: [
          {label: 'Muito distante', value: 0},
          {label: 'Distante', value: 1},
          {label: 'Nem distante nem próximo', value: 2},
          {label: 'Próximo', value: 3},
          {label: 'Muito próximo ', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '83',
        pergunta: 'Qual a sua escolaridade?',
        observacao_pergunta: 'para pessoa que não frequenta escola ou creche, mas já frequentou',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Creche, pré-escolar (maternal e jardim de infância), classe de alfabetização CA (passe para a questão 85)', value: 0},
          {label: 'Alfabetização de jovens e adultos (passe para a questão 85)', value: 1},
          {label: 'Ensino fundamental ou 1º grau incompleto', value: 2},
          {label: 'Ensino fundamental ou 1º grau completo (passe para a questão 85)', value: 3},
          {label: 'Educação de jovens e adultos ou supletivo do ensino fundamental (1º grau) incompleto', value: 4},
          {label: 'Educação de jovens e adultos ou supletivo do ensino fundamental (1º grau) completo (passe para a questão 85)', value: 5},
          {label: 'Ensino médio ou 2º grau incompleto (passe para a questão 85)', value: 6},
          {label: 'Ensino médio ou 2º grau (passe para a questão 85)', value: 7},
          {label: 'Educação de jovens e adultos ou supletivo do ensino médio (2º grau) incompleto (passe para a questão 85)', value: 8},
          {label: 'Educação de jovens e adultos ou supletivo do ensino médio (2º grau) completo (passe para a questão 85)', value: 9},
          {label: 'Superior incompleto (passe para a questão 85)', value: 10},
          {label: 'Superior completo (passe para a questão 85)', value: 11},
          {label: 'Especialização (passe para a questão 85)', value: 12},
          {label: 'Mestrado ou doutorado (passe para a questão 85)', value: 13},
          {label: 'Não sabe  (passe para a questão 85)', value: 14},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '84',
        pergunta: 'Até qual série/ano completou com aprovação?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: '1° ano', value: 0},
          {label: '1ª série/2° ano', value: 1},
          {label: '2ª série/3° ano', value: 2},
          {label: '3ª série/4° ano', value: 3},
          {label: '4ª série/5° ano', value: 4},
          {label: '5ª série/6° ano', value: 5},
          {label: '6ª série/7° ano', value: 6},
          {label: '7ª série/8° ano', value: 7},
          {label: '8ª série/9° ano', value: 8},
          {label: 'Curso não seriado', value: 9},
          {label: 'Nenhuma', value: 10},
          {label: 'Não sabe', value: 11},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '85',
        pergunta: 'Na semana passada o(a) sr.(a): Trabalhou, ganhando em dinheiro, produtos, mercadorias ou benefícios?',
        observacao_pergunta: 'benefícios: moradia, alimentação etc.',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim (passe para a questão 89)', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '86',
        pergunta: 'Na semana passada o(a) sr.(a): Tinha algum trabalho remunerado (que gerou renda, no qual ganhou dinheiro), mas estava temporariamente afastado por algum motivo?',
        observacao_pergunta: 'férias, doença, greve, falta, más condições do tempo etc.',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim (passe para a questão 89)', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '87',
        pergunta: 'Na semana passada o(a) sr.(a): Ajudou sem qualquer pagamento no trabalho remunerado de morador do domicílio?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim (passe para a questão 89)', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '88',
        pergunta: 'Na semana passada o(a) sr.(a): Trabalhou na plantação, criação de animais ou pesca, somente para alimentação dos moradores do domicílio?',
        observacao_pergunta: 'inclusive caça e extrativismo',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim (passe para a questão 92)', value: 0},
          {label: 'Não (passe para a questão 91)', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '89',
        pergunta: 'Na semana passada o(a) sr.(a): No trabalho da semana passada, você era:',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Empregado com carteira assinada, fichado (passe para a questão 93)', value: 0},
          {label: 'Trabalhador doméstico com carteira assinada, fichado (passe para a questão 93)', value: 1},
          {label: 'Servidor público civil ou militar (passe para a questão 93)', value: 2},
          {label: 'Empregado sem carteira assinada, não fichado (passe para a questão 92)', value: 3},
          {label: 'Trabalhador doméstico sem carteira assinada, não fichado (passe para a questão 92)', value: 4},
          {label: 'Trabalhador por conta própria ou autônomo (passe para a questão 92)', value: 5},
          {label: 'Estagiário (passe para a questão 92)', value: 6},
          {label: 'Empregador s(passe para a questão 90)', value: 7},
          {label: 'Não sabe (passe para a questão 92)', value: 8},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '90',
        pergunta: 'Na semana passada o(a) sr.(a): Quantas pessoas empregava nesse trabalho?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: '1 a 2 pessoas', value: 0},
          {label: '3 a 5 pessoas', value: 1},
          {label: '5 a 7 pessoas', value: 2},
          {label: '7 a 10 pessoas', value: 3},
          {label: '11 ou mais pessoas', value: 4},
          {label: 'Não sabe', value: 5},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '91',
        pergunta: 'Na semana passada o(a) sr.(a): No mês passado procurou por trabalho remunerado?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '92',
        pergunta: 'Na semana passada o(a) sr.(a): Era contribuinte de instituto de previdência oficial na semana passada?',
        observacao_pergunta: '',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'Sim', value: 0},
          {label: 'Não', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
    {
        id: '93',
        pergunta: 'Na semana passada o(a) sr.(a): Qual foi o rendimento bruto total que obteve no último mês? ',
        observacao_pergunta: 'incluindo todas as fontes de renda: salário, seguro-desemprego, aposentadoria, pensão, mesada, aluguel, retirada mensal, bicos, extras, bolsa família etc.',
        pergunta_secundaria: '',
        opcoes: [
          {label: 'R$', value: 0},
          {label: 'Não tem renda', value: 1},
          {label: 'Não sabe', value: 2},
        ],
        opcoes_secundaria: '1',
        observacao_opcoes: 'Não ler a última opção',
        tipo: 'radio'
    },
];

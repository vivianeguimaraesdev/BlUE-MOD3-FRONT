import React,{useState} from 'react';
import './App.css';
import { Modal } from './components/Modal';
const JogosArrayBanco = [{
    id: 1,
    nomeJogo: "DOTA 2",
    logoUrl:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/international2019/global/dota_logo.png",
    imagemUrl: "https://wallpapercave.com/wp/wp2532627.jpg",
    trailerUrl: "https://www.youtube.com/embed/tMzpLnQtVuE",
    description: "Chame os amigos e joguem juntos. O Dota é um jogo complexo e em constante evolução, mas nunca é tarde demais para começar. Aprenda o básico jogando cooperativamente contra bots. Aprimore as suas habilidades no modo de teste de heróis. Entre de cabeça no sistema de criação de partidas, que usa o seu comportamento e nível de habilidade para garantir que você jogará com os jogadores certos a cada partida.",
    gender: "MOBA",
    releaseYear: "2013",
  },
  {
    id: 2,
    nomeJogo: "Valorant",
    logoUrl:"https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/112a8e92dcedcda4237de18e9126b2d2.png",
    imagemUrl: "https://images6.alphacoders.com/107/1072679.jpg",
    trailerUrl: "https://www.youtube.com/embed/IhhjcB2ZjIM",
    description: "Valorant é o novo jogo FPS da Riot Games, a mesma desenvolvedora do League of Legends (LoL). Conhecido inicialmente como “Project A”, o game é um fps 5v5 tático que mistura elementos de Counter Strike: Global Offensive (CS:GO) com Overwatch. O título conta com um elenco de personagens com habilidades específicas e mapas onde o objetivo é ativar um bomba ou defender um território. Os times começam a partida como ataque ou defesa, e trocam de lado na décima segunda rodada. Vence a equipe que fizer 13 pontos primeiro, e os jogos têm até 24 rounds. O game tem uma economia parecida com a do CS:GO e disponibiliza diversos armamentos para compra no início de cada rodada. Os personagens têm habilidades específicas que também podem ser liberadas na loja.",
    gender: "Tiro em Primeira Pessoa",
    releaseYear: "2020",
  },
  {
    id: 3,
    nomeJogo: "The Witcher 3 - Wild Hunt",
    logoUrl:"https://data4.origin.com/content/dam/originx/web/app/games/witcher/the-witcher-wild-hunt/the-witcher-wild-hunt_gdp-logo.png",
    imagemUrl: "https://images5.alphacoders.com/424/424912.jpg",
    trailerUrl: "https://www.youtube.com/embed/vuOPN4MpLaM",
    description: "The Witcher: Wild Hunt é um RPG de mundo aberto de fantasia cheio de escolhas vitais. Em The Witcher, você joga como um caçador de monstros profissional, Geralt de Rívia, em busca da criança da profecia em um vasto mundo aberto, rico em cidades mercantis, ilhas piratas, passagens perigosas nas montanhas e cavernas esquecidas a serem exploradas.",
    gender: "RPG",
    releaseYear: "2015",
  },
  {
    id: 4,
    nomeJogo: "Red Dead Redemption 2",
    logoUrl:"https://upload.wikimedia.org/wikipedia/commons/2/22/Red_Dead_Redemption_2_Logo.png",
    imagemUrl: "https://imagebee.org/games/red-dead-redemption-2/red-dead-redemption-2-2-1920x1080.jpg",
    trailerUrl: "https://www.youtube.com/embed/MwDJjFP_Ovg",
    description: "Estados Unidos, 1899. Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.",
    gender: "Ação",
    releaseYear: "2018",
  },
  {
    id: 5,
    nomeJogo: "BioShock: The Collection",
    logoUrl:"https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2021/07/Bioshock-PNG.png",
    imagemUrl: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_BioShockTheCollection_image1600w.jpg",
    trailerUrl: "https://www.youtube.com/embed/QtwY33n5WIo",
    description: "Retorne às cidades de Rapture e Columbia e experimente a franquia ganhadora de prêmios BioShock como nunca antes. BioShock: The Collection reconta as jornadas épicas do universo de BioShock, belamente remasterizado em 1080p. BioShock: The Collection traz todo o conteúdo para um jogador de BioShock, BioShock 2 e BioShock Infinite, todo o conteúdo adicional para um jogador, 'Columbia's Finest' pack e Director's Commentary: Imagining BioShock, com Ken Levine e Shawn Robertson.",
    gender: "Tiro em Primeira Pessoa",
    releaseYear: "2016",
  },
];

function ListaJogos () {

  const [selectItem,setSelectItem] = useState();
  const [GameList, setGameList] = useState(JogosArrayBanco.sort((a, b) => (a.nomeJogo > b.nomeJogo ? 1 : -1))); 
  const [showModal,setShowModal] = useState(false);
  const selected =(item) =>{
    setSelectItem(item);
    setShowModal(true);
  }
    return (
      <>
      <h1>Lista de Filmes:</h1>
        <div className="cardGames">
            <div className="cardContent">
            <ul>
                {GameList.map((f) => (
                    <li key={f.id}>
                        <h3>{f.nomeJogo}</h3>
                        <img src={f.imagemUrl} alt={"Capa do Jogo" + f.nomeJogo}/>
                        <button onClick={()=>selected(f)}>Saiba Mais</button>
                    </li>
                ))}
            </ul>
            </div>
            <Modal selectedGame={selectItem} showModal={showModal} setShowModal={setShowModal} />
        </div>
      </>
    );
};

export default ListaJogos;
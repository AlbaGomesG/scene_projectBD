DROP DATABASE IF EXISTS scene;
CREATE DATABASE scene WITH ENCODING 'UTF8';

\c scene;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    photo TEXT,
    title VARCHAR(255) NOT NULL,
    genero VARCHAR(100),
    ano_lancamento INT,
    sinopse TEXT
);

INSERT INTO movies (photo, title, genero, ano_lancamento, sinopse) VALUES
('https://www.google.com/url?sa=i&url=https%3A%2F%2Foregional.com.br%2Fblog%2Fdetalhes%2Fcomo-treinar-o-seu-dragao-2025-o-retorno-epico-em-live-action&psig=AOvVaw3aaq_IvyPKbeEL90rKcpbg&ust=1757522270223000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNDk_OeOzI8DFQAAAAAdAAAAABAE', 'Como Treinar o Seu Dragão', 'Fantasia, Aventura', 2025, 'Na ilha de Berk, um garoto viking chamado Soluço desafia a tradição ao fazer amizade com o dragão Banguela. No entanto, quando uma ameaça surge, a amizade de Soluço com Banguela se torna a chave para forjar um novo futuro.'),
('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.primevideo.com%2F-%2Fpt%2Fdetail%2FVelozes-e-Furiosos-2-Mais-velozes-e-mais-furiosos%2F0LLACOBLM73P11SEF8HM6AGKRG&psig=AOvVaw2-ki4SlKRy5kiXn6f5hKEL&ust=1757522539586000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJiV3OePzI8DFQAAAAAdAAAAABAE', 'Velozes e Furiosos 2', 'Ação, Crime', 2003, 'O ex-policial Brian Conner se muda de Los Angeles para Miami para recomeçar sua vida. Ele acaba se envolvendo em rachas na sua nova cidade com seu amigo Tej e Suki. Suas aventuras terminam quando ele é preso e faz um acordo com agentes do FBI. Brian tem a missão muito perigosa de prender um poderoso chefe do cartel das drogas.'),
('https://www.google.com/url?sa=i&url=https%3A%2F%2Fsnydercutbr.com%2Foff-critica-sobre-a-mulher-rei-o-filme-do-ano%2F&psig=AOvVaw0sVRntPbJjVQqvM-edtPjn&ust=1757522671067000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOD_waeQzI8DFQAAAAAdAAAAABAL', 'A Mulher Rei', 'Ação, Aventura', 2022, 'Em 1800, o general Nanisca treina um grupo de mulheres guerreiras para proteger o reino africano de Dahomey de um inimigo estrangeiro.'),
('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adorocinema.com%2Ffilmes%2Ffilme-275673%2F&psig=AOvVaw0AqWZVOunXMVMiBARV9YJs&ust=1757522916260000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPiX_5qRzI8DFQAAAAAdAAAAABAE', 'E Assim que Acaba', 'Romance, Drama', 2024, 'Lily Bloom decide começar uma nova vida em Boston e tentar abrir o seu próprio negócio. Como consequência de sua mudança de vida, Lily acredita que encontrou o amor verdadeiro com Ryle, um charmoso neurocirurgião. No entanto, as coisas se complicam quando um incidente doloroso desencadeia um trauma do passado e também, quando seu primeiro amor reaparece.'),
('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adorocinema.com%2Ffilmes%2Ffilme-61645%2F&psig=AOvVaw1akQdMMEJKGcj17Zg9hjLT&ust=1757522983028000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOiFiLuRzI8DFQAAAAAdAAAAABAE', 'A Casa Mostro', 'Terror, Animação', 2006, 'Nenhum adulto acredita quando três adolescentes falam que existe uma casa no bairro que é uma criatura perigosa. Com o Dia das Bruxas se aproximando, eles têm que descobrir uma forma de destruir a casa antes que ela faça mal a crianças inocentes.'),
('https://www.google.com/url?sa=i&url=https%3A%2F%2Fdisney.fandom.com%2Fpt-br%2Fwiki%2F10_Coisas_que_Eu_Odeio_em_Voc%25C3%25AA&psig=AOvVaw2cVr5_xvv3q8aUtgKgQ7yc&ust=1757523146428000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDTuomSzI8DFQAAAAAdAAAAABAE', '10 Coisas que Odeio em Você', 'Comédia, Romance', 1999, 'Bianca Stratford é bonita e popular, mas não pode namorar antes que sua irmã mais velha encontre um namorado primeiro. O problema é que nenhum garoto consegue chegar perto da irmã, Kat Stratford. Para resolver a situação, um rapaz interessado em Bianca suborna um amigo com passado misterioso para sair com Kat e, quem sabe, tentar conquistá-la.');
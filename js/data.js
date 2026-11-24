/**
 * ============================================================================
 * DATA — Site Data & Content Store
 * Paróquia Nossa Senhora Imaculada Conceição
 * ============================================================================
 */

window.SiteData = {
  parish: {
    name: "Paróquia Nossa Senhora Imaculada Conceição",
    shortName: "Imaculada Conceição",
    diocese: "Arquidiocese de São Paulo",
    foundingYear: 1952,
    pastor: "Padre Antônio Carlos Ribeiro",
    vicar: "Padre Marcos Silveira",
    address: "Rua das Acácias, 150 - Centro, São Paulo - SP, CEP 01000-000",
    phone: "(11) 3333-4444",
    whatsapp: "(11) 99999-8888",
    email: "contato@imaculadaconceicao.org.br",
    officeHours: "Segunda a Sexta das 08h às 12h e das 13h às 17h | Sábado das 08h às 12h",
    socialMedia: {
      facebook: "https://facebook.com/paroquiaimaculada",
      instagram: "https://instagram.com/paroquiaimaculada",
      youtube: "https://youtube.com/@paroquiaimaculada"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.634!3d-23.548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzUyLjgiUyA0NsKwMzgnMDIuNCJX!5e0!3m2!1spt-BR!2sbr"
  },

  hero: {
    badge: "Diocese de São Paulo • Desde 1952",
    title: "Paróquia Nossa Senhora",
    titleHighlight: "Imaculada Conceição",
    subtitle: "Acolhemos você e sua família de braços abertos para celebrar os sacramentos, crescer na fé e viver o amor fraterno em comunidade.",
    ctaPrimaryText: "Conheça Nossa Paróquia",
    ctaPrimaryLink: "#nossa-paroquia",
    ctaSecondaryText: "Horários de Missa",
    ctaSecondaryLink: "#horarios",
    backgroundImage: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=1920&q=80"
  },

  // ── Notícias Simuladas (8 itens completos com temática litúrgica e paroquial) ──
  news: [
    {
      id: 1,
      slug: "solenidade-imaculada-conceicao-festa-padroeira-2026",
      title: "Solene Festa da Padroeira: Novena e Programação Especial",
      excerpt: "Com grande alegria, nossa comunidade se prepara para a tradicional Festa de Nossa Senhora da Imaculada Conceição com procissão luminosa e missa solene.",
      content: "<p>Com imensa alegria e devoção filial, a Paróquia Nossa Senhora Imaculada Conceição convida todos os paroquianos e devotos para a programação especial da festa de nossa amada padroeira.</p><p>A Santa Missa Solene será presidida pelo nosso Bispo Diocesano e concelebrada por nossos sacerdotes, seguida da tradicional Procissão Luminosa pelas ruas do bairro, coroando a imagem de Nossa Senhora sob cânticos e orações de agradecimento.</p><p>Haverá também a tradicional quermesse comunitária no salão paroquial, com barracas típicas, música ao vivo e momentos de confraternização fraterna para toda a família.</p>",
      date: "2026-11-20",
      author: "Pastoral da Comunicação (PASCOM)",
      category: "Liturgia",
      image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&q=80",
      featured: true
    },
    {
      id: 2,
      slug: "inscricoes-abertas-catequese-e-crisma-2027",
      title: "Inscrições Abertas para Catequese Infantil, Crisma e Adultos",
      excerpt: "A Pastoral Catequética inicia o período de matrículas para as novas turmas de Iniciação à Vida Cristã de crianças, adolescentes e adultos.",
      content: "<p>A Iniciação à Vida Cristã é um caminho belíssimo de amizade com Jesus Cristo. Convidamos as famílias a inscreverem seus filhos para a preparação da Primeira Comunhão e do Sacramento da Crisma.</p><p>Os encontros ocorrem semanalmente nas dependências da paróquia, com dinâmicas, momentos de oração bíblica e partilha guiada por catequistas dedicados.</p><p>As vagas são limitadas por turma. As inscrições podem ser feitas diretamente na secretaria paroquial ou ao final de cada celebração dominical.</p>",
      date: "2026-11-15",
      author: "Pastoral Catequética",
      category: "Formação",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      featured: true
    },
    {
      id: 3,
      slug: "campanha-da-fraternidade-gesto-concreto-arrecadacao",
      title: "Pastoral da Caridade realiza Entrega de Cestas e Agasalhos",
      excerpt: "Graças à generosidade de nossos paroquianos, mais de 120 famílias em situação de vulnerabilidade foram assistidas neste mês.",
      content: "<p>A caridade é o coração pulsante da Igreja. Neste último sábado, a equipe da Pastoral da Caridade e Vicentinos realizou a triagem e entrega das doações recebidas ao longo do mês.</p><p>Foram distribuídas cestas de alimentos básicos, kits de higiene e agasalhos para famílias cadastradas e acompanhadas pelos nossos agentes.</p><p>Agradecemos a todos que contribuem mensalmente com as caixas de doação situadas nas entradas da Matriz. O amor ao próximo transforma vidas!</p>",
      date: "2026-11-08",
      author: "Pastoral da Caridade",
      category: "Comunidade",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
      featured: false
    },
    {
      id: 4,
      slug: "retiro-espiritual-de-advento-vigiai-e-orai",
      title: "Retiro Paroquial de Advento: Preparando o Coração para o Senhor",
      excerpt: "Um dia inteiro de recolhimento, adoração e confissões para vivenciarmos com profundidade o tempo litúrgico do Advento.",
      content: "<p>O tempo do Advento nos convida à conversão e à santa expectativa do nascimento do Menino Jesus. Em preparação espiritual, realizaremos nosso Retiro Anual de Advento.</p><p>Teremos palestras conduzidas pelo Padre Antônio Carlos, momentos de deserto espiritual, atendimento de confissões durante todo o dia e Santa Missa de encerramento.</p><p>As inscrições incluem almoço comunitário e lanche da tarde no salão paroquial. Garanta sua participação na secretaria.</p>",
      date: "2026-10-28",
      author: "Equipe Litúrgica",
      category: "Eventos",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80",
      featured: false
    },
    {
      id: 5,
      slug: "encontro-de-jovens-com-cristo-ejc-inscricoes",
      title: "Encontro de Jovens com Cristo (EJC) reúne mais de 90 participantes",
      excerpt: "Fim de semana marcado por testemunhos de fé, louvor, dinâmicas e profunda renovação espiritual para a juventude da paróquia.",
      content: "<p>A juventude de nossa paróquia esteve reunida em um fim de semana inesquecível de espiritualidade e alegria cristã no último Encontro de Jovens com Cristo.</p><p>Com o lema 'Não tenhais medo de ser santos', os jovens participaram de adoração ao Santíssimo Sacramento, dinâmicas de acolhimento e partilha em pequenos grupos.</p><p>Agora, o grupo dá continuidade aos encontros semanais que acontecem aos sábados às 19h no salão juvenil. Todos os jovens são bem-vindos!</p>",
      date: "2026-10-18",
      author: "Setor Juventude",
      category: "Pastoral",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      featured: false
    },
    {
      id: 6,
      slug: "adoracao-ao-santissimo-todas-as-quintas-feiras",
      title: "Quintas-feiras de Adoração e Louvor ao Santíssimo Sacramento",
      excerpt: "Jesus Sacramentado permanece exposto para oração pessoal e comunitária todas as quintas-feiras, com bênção solene às 17h.",
      content: "<p>'Vinde a mim todos vós que estais cansados e sobrecarregados, e eu vos aliviarei' (Mt 11,28). Nossa paróquia mantém a tradição da Adoração ao Santíssimo Sacramento toda quinta-feira.</p><p>As portas da igreja permanecem abertas das 15h às 17h30 para quem desejar um momento íntimo de prece silenciosa, agradecimento ou súplica diante do Senhor.</p><p>Às 17h, rezamos juntos a Bênção do Santíssimo, seguida do Terço da Misericórdia e da Santa Missa das 18h30.</p>",
      date: "2026-10-05",
      author: "Apostolado da Oração",
      category: "Liturgia",
      image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&q=80",
      featured: false
    },
    {
      id: 7,
      slug: "restauracao-dos-afrescos-e-vitrais-centrais-da-matriz",
      title: "Conclusão das Obras de Restauração dos Vitrais da Igreja Matriz",
      excerpt: "Após seis meses de cuidados técnicos, os vitrais históricos dedicados aos mistérios do Rosário voltam a resplandecer na nave central.",
      content: "<p>Com profundo júbilo, nossa comunidade celebra a entrega da restauração completa dos vitrais artísticos da nave central de nossa Igreja Matriz.</p><p>As peças, datadas da década de 1950, receberam higienização especializada, recuperação das armações de chumbo e iluminação de realce para destacar a arte sacra litúrgica.</p><p>Agradecemos a todos os dizimistas e benfeitores que tornaram possível preservar este patrimônio de fé para as próximas gerações.</p>",
      date: "2026-09-22",
      author: "Conselho Administrativo Paroquial",
      category: "Comunidade",
      image: "https://images.unsplash.com/photo-1572897426910-ec4bbefba2a8?w=800&q=80",
      featured: false
    },
    {
      id: 8,
      slug: "curso-de-noivos-preparacao-para-o-sacramento-do-matrimonio",
      title: "Pastoral Familiar abre Nova Turma para Encontro de Noivos",
      excerpt: "Orientação humana, jurídica e teológica para casais que darão o sagrado passo do Matrimônio no próximo semestre.",
      content: "<p>O matrimônio é um dom de Deus e um sinal visível do amor de Cristo pela sua Igreja. A Pastoral Familiar prepara com muito carinho cada Encontro de Noivos.</p><p>Durante dois dias, casais experientes e sacerdotes compartilham reflexões sobre diálogo, espiritualidade conjugal, paternidade responsável e fidelidade cristã.</p><p>As inscrições para a próxima edição de 2027 já estão disponíveis na secretaria paroquial para os casais agendados.</p>",
      date: "2026-09-10",
      author: "Pastoral Familiar",
      category: "Formação",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      featured: false
    }
  ],

  // ── Seção Nossa Paróquia (Institutional Cards) ──
  parishInfo: [
    {
      icon: "⛪",
      title: "Nossa História",
      text: "Fundada em 1952, a Paróquia Imaculada Conceição nasceu da união de pioneiros devotos que construíram um marco de fé e caridade no coração da comunidade.",
      link: "#nossa-paroquia"
    },
    {
      icon: "👑",
      title: "Nossa Padroeira",
      text: "Sob a intercessão da Virgem Imaculada, proclamada sem mácula de pecado, buscamos ser modelo de pureza, serviço, obediência e humildade cristã.",
      link: "#nossa-paroquia"
    },
    {
      icon: "✝️",
      title: "Nossos Padres",
      text: "Conheça o pároco Pe. Antônio Carlos e o vigário Pe. Marcos, que dedicam suas vidas ao pastoreio, ministração dos sacramentos e aconselhamento do povo de Deus.",
      link: "#nossa-paroquia"
    },
    {
      icon: "🏛️",
      title: "Espaço Litúrgico",
      text: "Nossa Matriz combina arte sacra clássica, nave acolhedora com capacidade para 600 fiéis, capela do Santíssimo e jardins para reflexão orante.",
      link: "#nossa-paroquia"
    },
    {
      icon: "👥",
      title: "Vida Comunitária",
      text: "Mais de 20 frentes pastorais ativas, promovendo a integração entre gerações, amparo aos necessitados e celebrações cheias de vida e esperança.",
      link: "#nossa-paroquia"
    }
  ],

  // ── Horários das Missas e Celebrações ──
  schedules: {
    masses: [
      { day: "Domingo", times: ["07h00", "09h00 (Comunidade)", "11h00 (Crianças)", "18h00 (Jovens)"] },
      { day: "Segunda a Sexta", times: ["07h00 (Matutina)", "18h30 (Vespertina)"] },
      { day: "Sábado", times: ["07h00 (Nossa Senhora)", "17h00 (Missa Antecipada de Domingo)"] }
    ],
    confessions: [
      { day: "Quarta-feira", times: ["16h00 às 17h30"] },
      { day: "Sábado", times: ["15h00 às 16h30"] },
      { day: "Demais dias", times: ["Mediante agendamento na secretaria"] }
    ],
    specialCelebrations: [
      { name: "Adoração ao Santíssimo", schedule: "Toda quinta-feira, das 15h00 às 17h30" },
      { name: "Terço dos Homens", schedule: "Terças-feiras, às 19h30" },
      { name: "Missa com Novena da Padroeira", schedule: "Toda quarta-feira, às 18h30" },
      { name: "Missa do Sagrado Coração de Jesus", schedule: "Primeira sexta-feira do mês, às 18h30" }
    ]
  },

  // ── Pastorais e Movimentos ──
  pastorals: [
    {
      icon: "💧",
      name: "Pastoral do Batismo",
      description: "Acolhe e orienta pais e padrinhos para o primeiro e fundamental sacramento da iniciação à vida em Cristo."
    },
    {
      icon: "📖",
      name: "Pastoral Catequética",
      description: "Educação na fé de crianças e jovens, conduzindo ao encontro pessoal com a Palavra de Deus e a Primeira Eucaristia."
    },
    {
      icon: "🕊️",
      name: "Pastoral da Crisma",
      description: "Confirmação dos dons do Espírito Santo, preparando adolescentes e adultos para serem testemunhas corajosas no mundo."
    },
    {
      icon: "🎵",
      name: "Ministério de Música",
      description: "Animação litúrgica com cantos sacros que elevam os corações a Deus em todas as missas e solenidades."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      name: "Pastoral Familiar",
      description: "Apoio, orientação, curso de noivos e fortalecimento dos laços matrimoniais à luz do Evangelho."
    },
    {
      icon: "🌟",
      name: "Setor Juventude (EJC)",
      description: "Espaço jovem de oração, confraternização, retiros e missões sociais que encantam os jovens com o Evangelho."
    },
    {
      icon: "📢",
      name: "PASCOM (Comunicação)",
      description: "Gestão das redes sociais, fotos, transmissões e informativo impresso da nossa paróquia."
    },
    {
      icon: "💰",
      name: "Pastoral do Dízimo",
      description: "Conscientização da corresponsabilidade de cada fiel para as dimensões religiosa, social e missionária da Igreja."
    },
    {
      icon: "🕯️",
      name: "Coroinhas e Acólitos",
      description: "Crianças e jovens que auxiliam com respeito, reverência e pontualidade o altar do Senhor nas celebrações."
    },
    {
      icon: "❤️",
      name: "Pastoral da Caridade",
      description: "Arrecadação de alimentos, remédios, roupas e assistência fraterna às famílias em situação de vulnerabilidade social."
    },
    {
      icon: "📿",
      name: "Apostolado da Oração",
      description: "Devoção ao Sagrado Coração de Jesus e intercessão constante pelas intenções da Igreja e do Santo Padre."
    },
    {
      icon: "🤝",
      name: "Pastoral da Saúde",
      description: "Visita a enfermos em hospitais e residências, levando a oração, carinho e a Sagrada Comunhão aos acamados."
    }
  ],

  // ── Sacramentos ──
  sacraments: [
    {
      name: "Batismo",
      icon: "💧",
      description: "Porta de entrada na vida cristã e templo do Espírito Santo. Celebrações aos primeiros e terceiros domingos do mês."
    },
    {
      name: "Eucaristia",
      icon: "🍞",
      description: "A fonte e o ápice de toda a vida da Igreja: o verdadeiro Corpo e Sangue de Cristo compartilhado no banquete celestial."
    },
    {
      name: "Crisma",
      icon: "🕊️",
      description: "O sacramento da maturidade cristã que confere a unção e plenitude dos sete dons do Espírito Santo."
    },
    {
      name: "Penitência / Confissão",
      icon: "🙏",
      description: "O abraço misericordioso do Pai que apaga os pecados e restabelece a paz na alma do pecador arrependido."
    },
    {
      name: "Matrimônio",
      icon: "💍",
      description: "A sagrada união de homem e mulher santificada por Deus, imagem viva do amor indefectível entre Cristo e a Igreja."
    },
    {
      name: "Ordem Sacerdotal",
      icon: "✝️",
      description: "Consagração de homens para o serviço pastoral dos mistérios divinos como bispos, presbíteros e diáconos."
    },
    {
      name: "Unção dos Enfermos",
      icon: "🕯️",
      description: "Graça de fortalecimento, alívio e coragem aos irmãos acometidos por enfermidades graves ou na velhice."
    }
  ],

  // ── Navegação ──
  navigation: [
    { label: "Início", href: "index.html" },
    {
      label: "A Paróquia",
      href: "#nossa-paroquia",
      children: [
        { label: "Nossa História", href: "#nossa-paroquia" },
        { label: "Nossa Padroeira", href: "#nossa-paroquia" },
        { label: "Nossos Padres", href: "#nossa-paroquia" },
        { label: "Espaço Litúrgico", href: "#nossa-paroquia" }
      ]
    },
    { label: "Pastorais", href: "#pastorais" },
    { label: "Sacramentos", href: "#sacramentos" },
    { label: "Notícias", href: "#noticias" },
    { label: "Horários", href: "#horarios" },
    { label: "Contato", href: "#contato" }
  ]
};

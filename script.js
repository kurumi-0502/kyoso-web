const mbtiData = [
    {
        groupId: 'analysts',
        groupName: '分析家 (Analysts)',
        color: 'var(--color-analyst)',
        types: [
            { id: 'INTJ', name: '建築家', desc: '想像力が豊かで、戦略的な思考を持つ。すべての物事に対して計画を用意している。', fullDesc: 'INTJ（建築家）は、想像力が豊かで、かつ決断力がある人たちです。野心的でありながらプライバシーを重んじ、驚くほど好奇心旺盛ですが、無駄なエネルギーは使いません。常に知識を渇望しており、複雑な問題を解決することに喜びを感じます。', traits: ['戦略的', '独立心', '完璧主義', '独創的'] },
            { id: 'INTP', name: '論理学者', desc: '貪欲な知識欲を持つ革新的な発明家。', fullDesc: 'INTP（論理学者）は、全人口のわずか3％を占める、非常に稀な性格タイプです。平凡であることを嫌い、独自の視点と活発な知性を誇りに思っています。宇宙の謎から日常の問題まで、あらゆるパターンの分析を楽しむ理論家です。', traits: ['論理的', '好奇心旺盛', '客観的', 'マイペース'] },
            { id: 'ENTJ', name: '指揮官', desc: '大胆で想像力豊か、かつ強い意志を持つ指導者。', fullDesc: 'ENTJ（指揮官）は、天性のリーダーです。生まれ持ったカリスマ性と自信を持ち、共通の目標に向けて人々をまとめる権威を示します。冷酷なまでの合理性を持ち、目的達成のためにはどんな困難にも立ち向かう強い意志があります。', traits: ['カリスマ性', '自信', '決断力', '効率重視'] },
            { id: 'ENTP', name: '討論者', desc: '賢くて好奇心旺盛な思考家。知的挑戦には必ず受けて立つ。', fullDesc: 'ENTP（討論者）は、究極の悪魔の代弁者であり、議論や意見の衝突の過程そのものを楽しみます。知識が豊富で、素早い思考力を持ち、既存のルールや概念を打ち破る新しいアイデアを生み出すのが得意です。', traits: ['機知に富む', '独創的', '議論好き', '適応力'] }
        ]
    },
    {
        groupId: 'diplomats',
        groupName: '外交官 (Diplomats)',
        color: 'var(--color-diplomat)',
        types: [
            { id: 'INFJ', name: '提唱者', desc: '静かで神秘的だが、非常に刺激的で疲れを知らない理想主義者。', fullDesc: 'INFJ（提唱者）は、すべての性格タイプの中で最も稀少です。生まれながらに持つ理想主義と道徳感覚が特徴ですが、単なる夢想家ではなく、具体的なステップを踏んで目標を達成し、ポジティブな影響をもたらす実行力も兼ね備えています。', traits: ['洞察力', '利他的', '決意', '情熱的'] },
            { id: 'INFP', name: '仲介者', desc: '詩人肌で親切な利他主義者。良い物事のためならいつでも懸命。', fullDesc: 'INFP（仲介者）は、真の理想主義者です。最悪の状況や悪人の中にも、常にわずかな善を見出し、物事をより良くしようと努めます。落ち着いていて控えめに見えますが、内面には激しい情熱と光を秘めています。', traits: ['共感力', '理想主義', '創造的', '誠実'] },
            { id: 'ENFJ', name: '主人公', desc: 'カリスマ性があり、人々を励ますリーダー。聞く人を魅了する。', fullDesc: 'ENFJ（主人公）は、情熱的でカリスマ性のある生まれながらのリーダーです。全人口の約2％を占め、政治家、コーチ、教師として、人々が目標を達成し、世界に貢献できるよう導くことに大きな喜びを感じます。', traits: ['思いやり', '指導力', '協調性', '利他的'] },
            { id: 'ENFP', name: '広報運動家', desc: '情熱的で独創力があり、かつ社交的な自由人。', fullDesc: 'ENFP（広報運動家）は、真の自由な精神の持ち主です。パーティーの盛り上げ役になることも多いですが、単に楽しむことよりも、他人との社会的・感情的な深いつながりを楽しむことに大きな意味を見出します。', traits: ['熱狂的', '社交的', '直感的', '自由奔放'] }
        ]
    },
    {
        groupId: 'sentinels',
        groupName: '番人 (Sentinels)',
        color: 'var(--color-sentinel)',
        types: [
            { id: 'ISTJ', name: '管理者', desc: '実用的で事実に基づいた思考の持ち主。その信頼性は紛れもない事実。', fullDesc: 'ISTJ（管理者）は、最も数が多く、全人口の約13％を占めると言われています。誠実さ、実用的な論理、そして義務に対するたゆまぬ献身を特徴とし、多くの家族や組織（法律事務所、規制機関、軍隊など）の重要な基盤となっています。', traits: ['責任感', '現実的', '几帳面', '誠実'] },
            { id: 'ISFJ', name: '擁護者', desc: '非常に献身的で心の温かい擁護者。いつでも大切な人を守る準備ができている。', fullDesc: 'ISFJ（擁護者）は、ユニークな特徴の組み合わせを持っています。共感力がありますが、家族や友人を守る必要があるときは非常に激しく戦います。静かでのんびりしていますが、細部にまで気を配り、優れた分析能力を持っています。', traits: ['思いやり', '忠実', '実践的', '観察力'] },
            { id: 'ESTJ', name: '幹部', desc: '優秀な管理者。物事や人々を管理する能力にかけては、右に出る者はいない。', fullDesc: 'ESTJ（幹部）は、伝統と秩序の代表者です。善悪や社会的に許容される基準を深く理解し、家族やコミュニティを結びつける役割を果たします。正直さ、献身、尊厳を重んじ、明確なアドバイスやガイダンスを喜んで提供します。', traits: ['組織力', '決断力', '秩序', '現実的'] },
            { id: 'ESFJ', name: '領事館', desc: '非常に思いやりがあり社交的で、人気がある。常に熱心に人々に手を差し伸べる。', fullDesc: 'ESFJ（領事館）は、人気者という言葉がぴったりな人たちです。全人口の約12％を占める非常に一般的なタイプです。高校時代はチアリーダーやクォーターバックなど、注目を集め、チームを勝利や名声に導く存在であることが多いです。', traits: ['社交的', '協調的', '世話好き', '実践的'] }
        ]
    },
    {
        groupId: 'explorers',
        groupName: '探検家 (Explorers)',
        color: 'var(--color-explorer)',
        types: [
            { id: 'ISTP', name: '巨匠', desc: '大胆で実践的な思考を持つ実験者。あらゆる道具を使いこなす。', fullDesc: 'ISTP（巨匠）は、目で見て手で触れて世界を探索し、冷静な理性と旺盛な好奇心を持っています。物作りが大好きで、あるプロジェクトから次のプロジェクトへと移り変わり、遊び半分で役立つものを作り、環境から学びます。', traits: ['冷静', '論理的', '適応力', '実践的'] },
            { id: 'ISFP', name: '冒険家', desc: '柔軟性と魅力がある芸術家。常に進んで物事を探索し、経験しようとする。', fullDesc: 'ISFP（冒険家）は、真の芸術家です。一般的な絵画の枠にとらわれず、美的感覚、デザイン、そして自分自身の選択や行動を通じて社会の限界を押し広げます。既存の箱を飛び出し、自分自身を探求し続けることを楽しみます。', traits: ['芸術的', '感受性', '柔軟', '情熱的'] },
            { id: 'ESTP', name: '起業家', desc: '賢くてエネルギッシュで、鋭い知覚の持ち主。危険と隣り合わせの人生を楽しむ。', fullDesc: 'ESTP（起業家）は、常に周囲に影響を与えます。パーティーで彼らを見つけるのは簡単です。ユーモアがあり、注目の的になることを好みます。行動を起こしながら考え、間違いを修正しながら進む実践的なアプローチを好みます。', traits: ['行動力', '現実的', '社交的', 'スリル好き'] },
            { id: 'ESFP', name: 'エンターテイナー', desc: '自発性があり、エネルギッシュで熱心なエンターテイナー。', fullDesc: 'ESFP（エンターテイナー）ほど、突然歌い出したり、踊り出したりする性格タイプはいません。彼らは今この瞬間を生き、その興奮に浸ります。周りの人々にも同じように感じてほしいと心から願っており、非常に寛大な性質を持っています。', traits: ['陽気', '観察眼', '表現力', '自発的'] }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('mbti-container');
    const modal = document.getElementById('mbti-modal');
    const closeModalBtn = document.getElementById('close-modal');

    // DOM Elements for Modal Content
    const modalId = document.getElementById('modal-id');
    const modalName = document.getElementById('modal-name');
    const modalDesc = document.getElementById('modal-desc');
    const modalTraits = document.getElementById('modal-traits');

    const filterButtons = document.querySelectorAll('.filter-btn');
    let activeFilter = 'all';

    function renderGroups(filter = 'all') {
        container.innerHTML = '';

        const groupsToRender = filter === 'all'
            ? mbtiData
            : mbtiData.filter(group => group.groupId === filter);

        groupsToRender.forEach(group => {
            const groupSection = document.createElement('section');
            groupSection.className = 'mbti-group';

            const groupHeader = document.createElement('h2');
            groupHeader.textContent = group.groupName;
            groupHeader.style.borderColor = group.color;
            groupHeader.style.color = group.color;
            groupSection.appendChild(groupHeader);

            const grid = document.createElement('div');
            grid.className = 'mbti-grid';

            group.types.forEach(type => {
                const card = document.createElement('div');
                card.className = 'glass-card';
                card.style.setProperty('--card-color', group.color);

                card.innerHTML = `
                    <div class="card-id">${type.id}</div>
                    <div class="card-name">${type.name}</div>
                    <div class="card-desc-short">${type.desc}</div>
                `;

                card.addEventListener('click', () => openModal(type, group.color));
                grid.appendChild(card);
            });

            groupSection.appendChild(grid);
            container.appendChild(groupSection);
        });
    }

    function setActiveFilter(filter) {
        activeFilter = filter;
        filterButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.filter === filter);
        });
        renderGroups(filter);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => setActiveFilter(button.dataset.filter));
    });

    renderGroups(activeFilter);

    // Open Modal Function
    function openModal(type, color) {
        modalId.textContent = type.id;
        modalId.style.color = color;
        modalName.textContent = type.name;
        modalDesc.textContent = type.fullDesc;

        // Render Traits
        modalTraits.innerHTML = '';
        type.traits.forEach(trait => {
            const li = document.createElement('li');
            li.textContent = trait;
            li.style.borderBottom = `2px solid ${color}`;
            modalTraits.appendChild(li);
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close Modal Function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Event Listeners for Closing Modal
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

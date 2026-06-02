const questionBank = [
  {
    id: 1,
    section: "Grammar",
    category: "Vている",
    scenario: "Percakapan tentang pekerjaan di Jepang.",
    pattern: "Vて + います",
    meaning: "sedang melakukan / keadaan pekerjaan sekarang",
    dialogue: [
      ["A", "日本で何をしていますか。"],
      ["B", "野菜を [blank]。"],
    ],
    choices: ["作ります", "作っています", "作りです"],
    answer: 1,
    explanation:
      "Pertanyaan ini menanyakan kegiatan atau pekerjaan sekarang. Bentuk yang cocok adalah つくっています.",
  },
  {
    id: 2,
    section: "Grammar",
    category: "て形",
    scenario: "Dua rekan kerja berbicara tentang rencana setelah pekerjaan selesai.",
    pattern: "Vて、Vます",
    meaning: "melakukan satu aksi lalu aksi berikutnya",
    dialogue: [
      ["A", "仕事が終わったら、何をしますか。"],
      ["B", "レストランで [blank]、家に帰ります。"],
    ],
    choices: ["食べます", "食べています", "食べて"],
    answer: 2,
    explanation:
      "Untuk menyambung urutan kegiatan, gunakan bentuk て: レストランで食べて、家に帰ります.",
  },
  {
    id: 3,
    section: "Grammar",
    category: "希望",
    scenario: "Percakapan dua anak tentang cita-cita.",
    pattern: "Nに + なりたいです",
    meaning: "ingin menjadi sesuatu",
    dialogue: [
      ["A", "将来、何になりたいですか。"],
      ["B", "子どもが好きですから、小学校の教師に [blank]。"],
    ],
    choices: ["したいです", "なりたいです", "します"],
    answer: 1,
    explanation:
      "Untuk cita-cita atau profesi yang ingin dicapai, gunakan Nになりたいです.",
  },
  {
    id: 4,
    section: "Grammar",
    category: "様子",
    scenario: "Pelanggan melihat menu dan mulai memesan makanan.",
    pattern: "イ形容詞い -> そうです",
    meaning: "kelihatannya enak / tampak seperti",
    dialogue: [
      ["お客", "すみませんが、おすすめは何ですか。"],
      ["店員", "いろいろな定食がありますよ。"],
      ["お客", "天ぷら定食は、おいし [blank]。じゃ、これをください。"],
    ],
    choices: ["ようです", "そうです", "いいです"],
    answer: 1,
    explanation:
      "Saat menilai dari tampilan makanan, おいしい berubah menjadi おいしそうです.",
  },
  {
    id: 5,
    section: "Grammar",
    category: "逆接",
    scenario: "Percakapan tentang tempat terbaik untuk tinggal.",
    pattern: "文 + だけど",
    meaning: "tetapi / walaupun begitu",
    dialogue: [
      ["A", "田舎と町と、どちらが好きですか。"],
      ["B", "そうですね。田舎のほうがいいと思います。"],
      ["A", "どうしてですか。"],
      ["B", "田舎は町よりちょっと不便 [blank]、静かですよ。"],
    ],
    choices: ["で", "です", "だけど"],
    answer: 2,
    explanation:
      "Ada kontras antara 不便 dan しずか. Karena itu gunakan だけど.",
  },
  {
    id: 6,
    section: "Grammar",
    category: "助詞",
    scenario: "Seseorang baru tiba di kantor dan menjelaskan alasan terlambat.",
    pattern: "Nで",
    meaning: "karena / akibat suatu peristiwa",
    dialogue: [
      ["A", "遅れて、すみませんでした。"],
      ["B", "アブさん、どうしたの?"],
      ["A", "先ほど、事故 [blank]、電車が止まりました。"],
    ],
    choices: ["で", "に", "が"],
    answer: 0,
    explanation:
      "Untuk menyebut penyebab peristiwa, gunakan で: 事故で電車が止まりました.",
  },
  {
    id: 7,
    section: "Grammar",
    category: "経験",
    scenario: "Dua teman berbicara tentang Tokyo Skytree.",
    pattern: "Vた + ことがあります",
    meaning: "pernah melakukan sesuatu",
    dialogue: [
      ["A", "東京スカイツリーに [blank] ことがありますか。"],
      ["B", "いいえ、ありません。"],
      ["A", "ぜひ週末に一緒に行きましょう。"],
    ],
    choices: ["のぼる", "のぼって", "のぼった"],
    answer: 2,
    explanation:
      "Pola pengalaman memakai bentuk lampau biasa: のぼったことがあります.",
  },
  {
    id: 8,
    section: "Grammar",
    category: "時間",
    scenario: "Dua teman berbicara tentang naik Shinkansen.",
    pattern: "Nの + 前に",
    meaning: "sebelum sesuatu",
    dialogue: [
      ["A", "新幹線に乗ったことがありますか。"],
      ["B", "いいえ、まだです。ぜひ行きましょう。"],
      ["A", "じゃ、旅行の [blank]、切符を買います。"],
    ],
    choices: ["前に", "後で", "から"],
    answer: 0,
    explanation:
      "Membeli tiket dilakukan sebelum perjalanan, jadi gunakan 旅行の前に.",
  },
  {
    id: 9,
    section: "Grammar",
    category: "方法",
    scenario: "Dua teman berada di restoran.",
    pattern: "Vます形 + 方",
    meaning: "cara melakukan sesuatu",
    dialogue: [
      ["A", "お箸の [blank] 方が上手ですね。教えてもらえませんか。"],
      ["B", "いいですよ。"],
    ],
    choices: ["つかい", "つかう", "つかって"],
    answer: 0,
    explanation:
      "Cara memakai sesuatu dinyatakan dengan bentuk ます tanpa ます + 方: 使い方.",
  },
  {
    id: 10,
    section: "Grammar",
    category: "て形",
    scenario: "Sika memperkenalkan makanan khas Indonesia kepada rekan kerja Jepang.",
    pattern: "Vて + 食べます",
    meaning: "melakukan aksi sebagai cara sebelum makan",
    dialogue: [
      ["シカ", "インドネシア料理はいろいろありますよ。"],
      ["よしこ", "そうですか。例えば?"],
      ["シカ", "ガドガドです。"],
      ["よしこ", "どうやって食べますか。"],
      ["シカ", "ゆでた野菜にピーナッツソースを [blank]、食べます。おいしいです。"],
    ],
    choices: ["かけて", "かけないで", "かける"],
    answer: 0,
    explanation:
      "Urutan cara makan memakai bentuk て: ソースをかけて食べます.",
  },
  {
    id: 11,
    section: "Grammar",
    category: "条件",
    scenario: "Rekan kerja menjelaskan cara memakai mesin fotokopi.",
    pattern: "V辞書形 + と",
    meaning: "kalau melakukan ini, hasilnya otomatis terjadi",
    dialogue: [
      ["A", "このコピー機の使い方、分かりますか。"],
      ["B", "このスタートボタンを [blank]、コピーが始まりますよ。"],
      ["A", "どうもすみません。"],
      ["B", "いいえ、だいじょうぶ。"],
    ],
    choices: ["おすと", "おして", "おし"],
    answer: 0,
    explanation:
      "Untuk hubungan otomatis seperti tombol ditekan lalu mesin mulai, gunakan と.",
  },
  {
    id: 12,
    section: "Grammar",
    category: "禁止・依頼",
    scenario: "Percakapan dokter dan pasien.",
    pattern: "Vないでください",
    meaning: "tolong jangan melakukan sesuatu",
    dialogue: [
      ["医者", "どうしましたか。"],
      ["患者", "頭が痛くて、鼻水が出ます。"],
      ["医者", "風邪ですね。今晩は、遅くまで [blank]。寝る前に、この薬を飲んでください。"],
    ],
    choices: ["起きてください", "起きないでください", "起きてはいけません"],
    answer: 1,
    explanation:
      "Dokter memberi nasihat agar tidak begadang. Bentuk sopan yang tepat adalah 起きないでください.",
  },
  {
    id: 13,
    section: "Grammar",
    category: "程度",
    scenario: "Rekan kerja berbicara tentang kondisi badan.",
    pattern: "Vます形 + すぎます",
    meaning: "terlalu banyak / berlebihan",
    dialogue: [
      ["A", "大丈夫ですか。顔色が悪いですよ。"],
      ["B", "頭が痛いんです。昨日の夜、ビールを [blank]。"],
      ["A", "それはいけませんね。早退してください。"],
    ],
    choices: ["飲みます", "飲まない", "飲みすぎました"],
    answer: 2,
    explanation:
      "Sakit kepala karena minum bir terlalu banyak tadi malam: 飲みすぎました.",
  },
  {
    id: 14,
    section: "Grammar",
    category: "伝聞",
    scenario: "Dua teman berbicara tentang kabar seseorang yang lulus JFT.",
    pattern: "普通形 + そうです",
    meaning: "katanya / saya dengar",
    dialogue: [
      ["A", "カリナさんはJFTに合格した [blank]。"],
      ["B", "そうですか。よかったですね。"],
      ["A", "いつも勉強していたので、合格できたそうです。"],
    ],
    choices: ["くれます", "のです", "そうです"],
    answer: 2,
    explanation:
      "Kalimat ini menyampaikan kabar yang didengar. Gunakan そうです setelah bentuk biasa.",
  },
  {
    id: 15,
    section: "Grammar",
    category: "時間",
    scenario: "Karina adalah pegawai baru dan berkenalan dengan calon rekan kerja.",
    pattern: "Vた + ばかりです",
    meaning: "baru saja melakukan sesuatu",
    dialogue: [
      ["A", "はじめまして。カリナです。インドネシアから来ました。"],
      ["B", "はじめまして。田中です。よろしくお願いします。"],
      ["A", "こちらこそ、よろしくお願いします。"],
      ["B", "カリナさんは、いつ日本に来ましたか。"],
      ["A", "一昨日、日本に来た [blank]。"],
      ["B", "インドネシアから、どのくらいかかりましたか。"],
      ["A", "ひこうきで7時間ぐらいです。"],
    ],
    choices: ["そうです", "ばかりです", "きます"],
    answer: 1,
    explanation:
      "一昨日来た means she arrived very recently. Use 来たばかりです.",
  },
  {
    id: 16,
    section: "Grammar",
    category: "理由の並列",
    scenario: "Dua teman berbicara tentang artis idola.",
    pattern: "文 + し、文 + し",
    meaning: "memberi beberapa alasan",
    dialogue: [
      ["A", "スダさんを知っていますか。"],
      ["B", "だれですか。"],
      ["A", "人気の歌を歌っている歌手ですよ。"],
      ["B", "ああ、すごい歌手ですね。"],
      ["A", "私は彼が好きです。かっこいい [blank]、歌もダンスも上手です。"],
    ],
    choices: ["し", "で", "と"],
    answer: 0,
    explanation:
      "Saat menyebut beberapa alasan, pakai し: かっこいいし、歌もダンスも上手です.",
  },
  {
    id: 17,
    section: "Grammar",
    category: "条件",
    scenario: "Dua sahabat berbicara tentang rekomendasi restoran.",
    pattern: "Nなら",
    meaning: "kalau bicara tentang N",
    dialogue: [
      ["スサン", "この近くに、おすすめの店がありますか。"],
      ["田中", "そうですね。さくら寿司ですよ。"],
      ["スサン", "いちばんおいしい料理は何ですか。"],
      ["田中", "あの店 [blank]、何を食べてもおいしいよ。"],
      ["スサン", "そうなんですか。"],
    ],
    choices: ["なら", "だから", "それから"],
    answer: 0,
    explanation:
      "なら mengangkat topik yang sudah disebut: kalau restoran itu, apa pun enak.",
  },
  {
    id: 18,
    section: "Grammar",
    category: "推量",
    scenario: "Seseorang melihat cuaca sebelum pergi ke perpustakaan.",
    pattern: "普通形 + みたいです",
    meaning: "kelihatannya / sepertinya",
    dialogue: [
      ["A", "昼、図書館へ行きたいんですが、雨が降る [blank]。"],
      ["B", "そうですか。じゃ、それなら、かさをもっていったほうがいいですよ。"],
    ],
    choices: ["でしょう", "みたいです", "いいです"],
    answer: 1,
    explanation:
      "Saat menebak dari tanda-tanda yang terlihat, gunakan みたいです.",
  },
  {
    id: 19,
    section: "Grammar",
    category: "予定・意志",
    scenario: "Liya dan Rezal berbicara tentang rencana setelah lulus JFT.",
    pattern: "V辞書形 + つもりです",
    meaning: "bermaksud / berencana",
    dialogue: [
      ["リヤ", "JFT試験に合格してから、どうすればいいですか。"],
      ["レザル", "まず、面接を受けてください。"],
      ["リヤ", "そうですか。"],
      ["レザル", "ところで、どうして日本で働く [blank] か。"],
      ["リヤ", "日本で技術を学びたいからです。"],
    ],
    choices: ["よていです", "いきます", "つもりです"],
    answer: 2,
    explanation:
      "Untuk menyatakan niat bekerja di Jepang, gunakan 働くつもりです.",
  },
  {
    id: 20,
    section: "Grammar",
    category: "条件",
    scenario: "Ayu dan Vinka berencana menonton pertandingan baseball.",
    pattern: "Vたら",
    meaning: "kalau terjadi",
    dialogue: [
      ["アユ", "明日は野球の試合ですね。一緒に見ましょう。"],
      ["ヴィンカ", "そうしましょう。"],
      ["アユ", "でも、天気予報によると、明日は雨が降るそうですよ。"],
      ["ヴィンカ", "雨が [blank]、中止になりますよ。"],
      ["アユ", "ええ。仕方がない。"],
    ],
    choices: ["ふったら", "ふっても", "ふってから"],
    answer: 0,
    explanation:
      "中止になる adalah akibat jika hujan turun. Gunakan ふったら.",
  },
  {
    id: 21,
    section: "Grammar",
    category: "目的",
    scenario: "Riska dan Rana berbicara tentang kelas bahasa Jepang.",
    pattern: "可能形 + ように",
    meaning: "agar bisa melakukan sesuatu",
    dialogue: [
      ["リスカ", "ラナさん、日本語教室はどうですか。"],
      ["ラナ", "初めは難しいですが、おもしろいです。"],
      ["リスカ", "日本語が話せる [blank]、毎日練習してください。"],
      ["ラナ", "わかりました。家でも練習します。"],
      ["リスカ", "これからも頑張ってくださいね。"],
    ],
    choices: ["ように", "ために", "そうに"],
    answer: 0,
    explanation:
      "Untuk tujuan berupa kemampuan, gunakan ように: 話せるように.",
  },
  {
    id: 22,
    section: "Grammar",
    category: "失敗・完了",
    scenario: "Dua teman berbicara lewat telepon dan janji bertemu.",
    pattern: "Vて + しまいました",
    meaning: "terlanjur / tidak sengaja terjadi",
    dialogue: [
      ["A", "もしもし、ニナさん、どこにいるの?"],
      ["B", "ええと。"],
      ["A", "もう30分待っていましたよ。"],
      ["B", "地図を見ながら行きましたが、道を間違えて [blank]。すみません。"],
      ["A", "そうですか。たいへんですね。じゃ、気をつけてね。"],
    ],
    choices: ["おきました", "しました", "しまいました"],
    answer: 2,
    explanation:
      "Untuk kesalahan yang disesali, gunakan てしまいました: まちがえてしまいました.",
  },
  {
    id: 23,
    section: "Grammar",
    category: "副詞化",
    scenario: "Nina berada di salon.",
    pattern: "イ形容詞い -> く + V",
    meaning: "membuat atau melakukan menjadi keadaan tertentu",
    dialogue: [
      ["美容師", "いらっしゃいませ。今日はどうなさいますか。"],
      ["ニナ", "カット、お願いします。"],
      ["美容師", "カットはどうなさいますか。"],
      ["ニナ", "この写真みたいにしてください。でも、ちょっと [blank] 切ってください。"],
      ["美容師", "はい、わかりました。"],
    ],
    choices: ["みじかく", "みじかいに", "めじく"],
    answer: 0,
    explanation:
      "Sebelum kata kerja カットする, みじかい berubah menjadi みじかく.",
  },
  {
    id: 24,
    section: "Grammar",
    category: "用途",
    scenario: "Pira bertanya tentang benda yang baru pertama kali dilihat.",
    pattern: "V辞書形 + のに使います",
    meaning: "dipakai untuk melakukan sesuatu",
    dialogue: [
      ["ピラ", "これは何ですか。"],
      ["デウィ", "ふろしきです。"],
      ["ピラ", "プレゼントを包む布ですね。"],
      ["デウィ", "はい。荷物を包む [blank]。"],
      ["ピラ", "いいですね。どこで買えますか。"],
      ["デウィ", "いろいろなところで買えますよ。"],
    ],
    choices: ["にします", "ようにします", "のにつかいます"],
    answer: 2,
    explanation:
      "Furoshiki dipakai untuk membungkus barang. Polanya V辞書形 + のに使います.",
  },
  {
    id: 25,
    section: "Expression",
    category: "例示",
    scenario: "Dua sahabat berbicara tentang makanan Jepang yang disukai.",
    pattern: "Nとか",
    meaning: "misalnya / dan sebagainya",
    dialogue: [
      ["A", "どんな日本の料理が好きですか。"],
      ["B", "日本料理なら、魚料理が好きです。すし [blank]。"],
    ],
    choices: ["や", "と", "とか"],
    answer: 2,
    explanation:
      "とか memberi contoh dengan nuansa santai: すしとか.",
  },
  {
    id: 26,
    section: "Expression",
    category: "訂正",
    scenario: "Seorang nenek menanyakan asal daerah Yuni.",
    pattern: "Nじゃなくて",
    meaning: "bukan N, melainkan",
    dialogue: [
      ["おばあさん", "ユニさんはどこから来ましたか。"],
      ["ユニ", "インドネシアのジャカルタです。"],
      ["おばあさん", "インド人ですね。どんな国ですか。"],
      ["ユニ", "ちがいますよ。インド [blank]、インドネシアです。"],
    ],
    choices: ["だから", "じゃなくて", "から"],
    answer: 1,
    explanation:
      "Untuk membetulkan salah paham, gunakan じゃなくて: インドじゃなくて、インドネシアです.",
  },
  {
    id: 27,
    section: "Expression",
    category: "誘い",
    scenario: "Dua sahabat berbicara tentang restoran baru.",
    pattern: "Vませんか",
    meaning: "mengajak dengan sopan",
    dialogue: [
      ["A", "新しいレストランはもうすぐ開きますよ。"],
      ["B", "どこにありますか。"],
      ["A", "駅の前にありますよ。一緒に [blank]。"],
      ["B", "ええ、仕事が終わったら、ぜひ行きましょう。"],
    ],
    choices: ["行きたいです", "行くだろう", "行きませんか"],
    answer: 2,
    explanation:
      "Untuk mengajak orang lain secara sopan, gunakan Vませんか.",
  },
  {
    id: 28,
    section: "Expression",
    category: "所要時間",
    scenario: "Di pinggir jalan, seseorang bertanya kepada petugas.",
    pattern: "どのぐらい + かかりますか",
    meaning: "berapa lama waktu yang dibutuhkan",
    dialogue: [
      ["A", "ここから近くの駅まで [blank] かかりますか。"],
      ["B", "歩いて10分ですよ。"],
    ],
    choices: ["どのぐらい", "どれ", "なんじ"],
    answer: 0,
    explanation:
      "Untuk menanyakan durasi, gunakan どのぐらいかかりますか.",
  },
  {
    id: 29,
    section: "Expression",
    category: "申し出",
    scenario: "Rekan kerja kesulitan memakai mesin.",
    pattern: "Vましょうか",
    meaning: "menawarkan bantuan",
    dialogue: [
      ["A", "この機械の使い方が難しいんですが。"],
      ["B", "手伝い [blank]。"],
    ],
    choices: ["ますか", "みたいですか", "ましょうか"],
    answer: 2,
    explanation:
      "Untuk menawarkan bantuan, gunakan ましょうか: 手伝いましょうか.",
  },
  {
    id: 30,
    section: "Expression",
    category: "比較",
    scenario: "Dua sahabat berbicara tentang cara pergi ke kantor.",
    pattern: "Nより Nのほうがいいです",
    meaning: "lebih baik daripada",
    dialogue: [
      ["A", "会社へ行くには、何が便利だと思いますか。"],
      ["B", "車より自転車の [blank]。"],
    ],
    choices: ["便利です", "ほうが便利です", "すごいです"],
    answer: 1,
    explanation:
      "Perbandingan pilihan memakai Nより Nのほうが + 形容詞です.",
  },
  {
    id: 31,
    section: "Expression",
    category: "接続詞",
    scenario: "Susan ingin mengadakan pesta dan bertanya kepada temannya.",
    pattern: "それで",
    meaning: "karena itu / akibatnya",
    dialogue: [
      ["スサン", "誕生日のパーティーは、どこにしましょうか。"],
      ["友だち", "さくらレストランは、どうですか。"],
      ["スサン", "いいでしょうか。"],
      ["友だち", "料理がおいしいし、場所も広いし、[blank] 人気があるんですよ。"],
    ],
    choices: ["そして", "それで", "それに"],
    answer: 1,
    explanation:
      "Setelah alasan yang membuat tempat itu populer, それで menunjukkan hasil.",
  },
  {
    id: 32,
    section: "Expression",
    category: "訪問",
    scenario: "Hana-san sedang berkunjung ke rumah temannya.",
    pattern: "おじゃまします",
    meaning: "ungkapan saat masuk ke rumah orang",
    dialogue: [
      ["Hana", "ごめんください。"],
      ["友だち", "いらっしゃい。どうぞ お上がりください。"],
      ["Hana", "[blank]"],
    ],
    choices: ["おかげさまで", "ちょっと", "おじゃまします"],
    answer: 2,
    explanation:
      "Saat masuk ke rumah orang lain, ucapkan おじゃまします.",
  },
  {
    id: 33,
    section: "Expression",
    category: "接客",
    scenario: "Percakapan antara pelanggan dan pelayan restoran.",
    pattern: "何人ですか / 何名様ですか",
    meaning: "menanyakan jumlah orang",
    dialogue: [
      ["店員", "いらっしゃいませ。お客様、[blank]"],
      ["お客", "2人です。"],
      ["店員", "2名様ですね。テーブルへご案内します。"],
      ["お客", "はい。お願いします。"],
      ["店員", "こちらへどうぞ。"],
    ],
    choices: ["いくつですか", "何人ですか", "何名様ですか"],
    answer: 2,
    explanation:
      "Dalam layanan restoran, bentuk sopan untuk jumlah orang adalah 何名様ですか.",
  },
  {
    id: 34,
    section: "Expression",
    category: "相談",
    scenario: "Meriya dan Ana berbicara tentang rencana liburan musim panas.",
    pattern: "どうしたらいいですか",
    meaning: "apa yang sebaiknya dilakukan",
    dialogue: [
      ["メリヤ", "夏休みはどこに行くの?"],
      ["アナ", "まだ考えていないよ。君は?"],
      ["メリヤ", "ひまわりの里へ行きたいんですが、[blank]"],
      ["アナ", "そうね。電車で行くといいよ。お金を多めに持って行って、上着も持って行ったほうがいいよ。"],
    ],
    choices: ["どうですか", "どうしたらいいですか", "どうなりますか"],
    answer: 1,
    explanation:
      "Saat meminta saran tentang cara bertindak, gunakan どうしたらいいですか.",
  },
  {
    id: 35,
    section: "Expression",
    category: "限定",
    scenario: "Deka menelepon Ratna untuk mengajak bepergian.",
    pattern: "Nしか + Vません",
    meaning: "hanya / tidak selain itu",
    dialogue: [
      ["デカ", "もしもし、ラトナさんは、いますか。"],
      ["ラトナ", "はい、ラトナです。デカさん、何ですか。"],
      ["デカ", "富士山に登ったことがありますか。週末、一緒に行きませんか。"],
      ["ラトナ", "週末はちょっと。日曜日 [blank] 休めませんから、なかなか旅行に行けません。"],
      ["デカ", "残念ですね。"],
    ],
    choices: ["だけ", "しか", "だけで"],
    answer: 1,
    explanation:
      "しか selalu dipakai dengan bentuk negatif: 日曜日しか休めません.",
  },
  {
    id: 36,
    section: "Grammar",
    category: "助詞",
    scenario: "Rani berbicara tentang rencana belanja setelah kelas.",
    pattern: "場所 + に/へ + 行きます",
    meaning: "pergi ke suatu tempat",
    dialogue: [
      ["A", "授業が終わったら、どこへ行きますか。"],
      ["B", "スーパー [blank] 行きます。晩ごはんの材料を買います。"],
    ],
    choices: ["で", "に", "を"],
    answer: 1,
    explanation:
      "Tujuan pergi ditandai dengan に atau へ. Jadi スーパーに行きます.",
  },
  {
    id: 37,
    section: "Grammar",
    category: "時間",
    scenario: "Dokter menjelaskan cara minum obat kepada pasien.",
    pattern: "Vて + から",
    meaning: "setelah melakukan sesuatu",
    dialogue: [
      ["医者", "この薬は、ごはんを食べて [blank] 飲んでください。"],
      ["患者", "はい、わかりました。"],
    ],
    choices: ["から", "まで", "より"],
    answer: 0,
    explanation:
      "Untuk urutan setelah melakukan sesuatu, gunakan Vてから: 食べてから飲みます.",
  },
  {
    id: 38,
    section: "Grammar",
    category: "同時動作",
    scenario: "Dua teman berbicara tentang cara belajar.",
    pattern: "Vます形 + ながら",
    meaning: "melakukan dua kegiatan bersamaan",
    dialogue: [
      ["A", "いつ日本語を勉強しますか。"],
      ["B", "電車で音楽を聞き [blank]、単語を覚えます。"],
    ],
    choices: ["ながら", "から", "あとで"],
    answer: 0,
    explanation:
      "Dua kegiatan yang dilakukan bersamaan memakai ながら: 聞きながら覚えます.",
  },
  {
    id: 39,
    section: "Grammar",
    category: "義務",
    scenario: "Pegawai baru bertanya tentang aturan perusahaan.",
    pattern: "Vない形 + といけません",
    meaning: "harus melakukan sesuatu",
    dialogue: [
      ["新人", "明日は何時に来ればいいですか。"],
      ["先輩", "会議がありますから、8時までに来 [blank]。"],
    ],
    choices: ["ないといけません", "てもいいです", "ないでください"],
    answer: 0,
    explanation:
      "Kewajiban dinyatakan dengan Vないといけません: 来ないといけません.",
  },
  {
    id: 40,
    section: "Grammar",
    category: "助言",
    scenario: "Teman memberi nasihat karena cuaca dingin.",
    pattern: "Vた形 + ほうがいいです",
    meaning: "sebaiknya melakukan sesuatu",
    dialogue: [
      ["A", "今日はとても寒いですね。"],
      ["B", "ええ。コートを [blank] ほうがいいですよ。"],
    ],
    choices: ["着る", "着た", "着て"],
    answer: 1,
    explanation:
      "Nasihat memakai Vた形 + ほうがいいです: コートを着たほうがいいです.",
  },
  {
    id: 41,
    section: "Grammar",
    category: "例示",
    scenario: "Dua teman membicarakan kegiatan akhir pekan.",
    pattern: "Vたり、Vたりします",
    meaning: "memberi contoh beberapa kegiatan",
    dialogue: [
      ["A", "週末、何をしましたか。"],
      ["B", "映画を見 [blank]、買い物したりしました。"],
    ],
    choices: ["たり", "ても", "ながら"],
    answer: 0,
    explanation:
      "Untuk menyebut beberapa contoh kegiatan, gunakan Vたり、Vたりします.",
  },
  {
    id: 42,
    section: "Grammar",
    category: "意見",
    scenario: "Dua teman berbicara tentang tinggal di Jepang.",
    pattern: "普通形 + と思います",
    meaning: "menurut saya / saya pikir",
    dialogue: [
      ["A", "日本の生活はどうですか。"],
      ["B", "便利だ [blank]。でも、物価が高いです。"],
    ],
    choices: ["と思います", "にします", "があります"],
    answer: 0,
    explanation:
      "Untuk menyatakan pendapat, gunakan と思います: 便利だと思います.",
  },
  {
    id: 43,
    section: "Grammar",
    category: "推量",
    scenario: "Ayu belum melihat temannya di kelas.",
    pattern: "普通形 + かもしれません",
    meaning: "mungkin",
    dialogue: [
      ["A", "リナさんはまだ来ませんね。"],
      ["B", "今日は病気 [blank]。"],
    ],
    choices: ["かもしれません", "にします", "でした"],
    answer: 0,
    explanation:
      "Kemungkinan yang belum pasti dinyatakan dengan かもしれません.",
  },
  {
    id: 44,
    section: "Grammar",
    category: "可能",
    scenario: "Seseorang bertanya apakah bisa memakai kartu di toko.",
    pattern: "V辞書形 + ことができます",
    meaning: "bisa melakukan sesuatu",
    dialogue: [
      ["客", "カードで払う [blank]。"],
      ["店員", "はい、できます。"],
    ],
    choices: ["ことができますか", "ことですか", "ものですか"],
    answer: 0,
    explanation:
      "Kemampuan atau izin umum bisa memakai V辞書形 + ことができます.",
  },
  {
    id: 45,
    section: "Grammar",
    category: "目的",
    scenario: "Teman bertanya alasan belajar bahasa Jepang.",
    pattern: "Nのために / V辞書形ために",
    meaning: "untuk tujuan tertentu",
    dialogue: [
      ["A", "どうして日本語を勉強していますか。"],
      ["B", "日本で働く [blank]、毎日勉強しています。"],
    ],
    choices: ["ために", "ように", "そうに"],
    answer: 0,
    explanation:
      "Jika tujuannya adalah tindakan yang disengaja, gunakan ために: 働くために.",
  },
  {
    id: 46,
    section: "Grammar",
    category: "理由",
    scenario: "Teman menjelaskan alasan tidak bisa pergi.",
    pattern: "普通形 + ので",
    meaning: "karena, dengan nuansa sopan",
    dialogue: [
      ["A", "今晩、いっしょにごはんを食べませんか。"],
      ["B", "すみません。明日試験がある [blank]、今日は早く帰ります。"],
    ],
    choices: ["ので", "ながら", "たり"],
    answer: 0,
    explanation:
      "Untuk memberi alasan dengan sopan, gunakan ので.",
  },
  {
    id: 47,
    section: "Grammar",
    category: "許可",
    scenario: "Di kelas, seorang siswa meminta izin.",
    pattern: "Vて + もいいですか",
    meaning: "bolehkah melakukan sesuatu",
    dialogue: [
      ["学生", "先生、ここで写真を撮っ [blank]。"],
      ["先生", "はい、いいですよ。"],
    ],
    choices: ["てもいいですか", "てはいけませんか", "ないでください"],
    answer: 0,
    explanation:
      "Meminta izin memakai Vてもいいですか: 写真を撮ってもいいですか.",
  },
  {
    id: 48,
    section: "Grammar",
    category: "禁止",
    scenario: "Petugas menjelaskan aturan di museum.",
    pattern: "Vて + はいけません",
    meaning: "tidak boleh melakukan sesuatu",
    dialogue: [
      ["客", "この絵の写真を撮ってもいいですか。"],
      ["係員", "すみません。ここで写真を撮っ [blank]。"],
    ],
    choices: ["てもいいです", "てはいけません", "てください"],
    answer: 1,
    explanation:
      "Larangan memakai Vてはいけません: 撮ってはいけません.",
  },
  {
    id: 49,
    section: "Grammar",
    category: "授受",
    scenario: "Dua teman berbicara tentang hadiah ulang tahun.",
    pattern: "人に Nを あげます",
    meaning: "memberikan sesuatu kepada orang lain",
    dialogue: [
      ["A", "妹さんの誕生日に何をしますか。"],
      ["B", "妹に花を [blank]。"],
    ],
    choices: ["あげます", "もらいます", "くれます"],
    answer: 0,
    explanation:
      "Jika pembicara memberi kepada orang lain, gunakan あげます.",
  },
  {
    id: 50,
    section: "Grammar",
    category: "変化",
    scenario: "Seorang pelajar berbicara tentang kemampuan bahasa Jepangnya.",
    pattern: "イ形容詞い -> くなります",
    meaning: "menjadi lebih ...",
    dialogue: [
      ["A", "日本語の勉強はどうですか。"],
      ["B", "毎日練習したら、日本語の勉強が少し楽しく [blank]。"],
    ],
    choices: ["なりました", "しました", "あります"],
    answer: 0,
    explanation:
      "Perubahan untuk イ形容詞 memakai くなります: 楽しい -> 楽しくなりました.",
  },
  {
    id: 51,
    section: "Grammar",
    category: "変化",
    scenario: "Percakapan tentang musim dan cuaca.",
    pattern: "ナ形容詞/名詞 + に + なります",
    meaning: "menjadi suatu keadaan",
    dialogue: [
      ["A", "日本の秋はどうですか。"],
      ["B", "9月ごろから、だんだん すずしく [blank]。"],
    ],
    choices: ["なります", "します", "あります"],
    answer: 0,
    explanation:
      "Untuk perubahan keadaan, gunakan なります: すずしくなります.",
  },
  {
    id: 52,
    section: "Grammar",
    category: "準備",
    scenario: "Dua teman menyiapkan perjalanan.",
    pattern: "Vて + おきます",
    meaning: "melakukan sesuatu sebagai persiapan",
    dialogue: [
      ["A", "旅行の前に何をしますか。"],
      ["B", "ホテルを予約し [blank]。"],
    ],
    choices: ["ておきます", "ています", "てしまいます"],
    answer: 0,
    explanation:
      "Persiapan sebelum kejadian memakai Vておきます: 予約しておきます.",
  },
  {
    id: 53,
    section: "Expression",
    category: "健康",
    scenario: "Teman sakit dan akan pulang lebih cepat.",
    pattern: "お大事に",
    meaning: "semoga lekas sembuh / jaga kesehatan",
    dialogue: [
      ["A", "頭が痛いので、今日は帰ります。"],
      ["B", "そうですか。[blank]。"],
    ],
    choices: ["お大事に", "いただきます", "いらっしゃいませ"],
    answer: 0,
    explanation:
      "Saat orang sakit, ungkapan yang tepat adalah お大事に.",
  },
  {
    id: 54,
    section: "Expression",
    category: "接客",
    scenario: "Pelanggan menelepon restoran untuk bertanya meja kosong.",
    pattern: "少々お待ちください",
    meaning: "mohon tunggu sebentar",
    dialogue: [
      ["客", "今晩、席がありますか。"],
      ["店員", "確認しますので、[blank]。"],
    ],
    choices: ["少々お待ちください", "ごちそうさまでした", "おじゃまします"],
    answer: 0,
    explanation:
      "Dalam layanan pelanggan, minta menunggu sebentar dengan 少々お待ちください.",
  },
  {
    id: 55,
    section: "Expression",
    category: "職場",
    scenario: "Pegawai masuk ke ruang rapat.",
    pattern: "失礼します",
    meaning: "permisi saat masuk/meninggalkan ruang",
    dialogue: [
      ["社員", "[blank]。資料を持ってきました。"],
      ["部長", "ありがとうございます。"],
    ],
    choices: ["失礼します", "おかえりなさい", "いただきます"],
    answer: 0,
    explanation:
      "Saat masuk ke ruangan kantor dengan sopan, gunakan 失礼します.",
  },
  {
    id: 56,
    section: "Expression",
    category: "食事",
    scenario: "Setelah makan di rumah teman.",
    pattern: "ごちそうさまでした",
    meaning: "terima kasih atas makanannya",
    dialogue: [
      ["A", "今日はたくさん食べましたね。"],
      ["B", "はい、とてもおいしかったです。[blank]。"],
    ],
    choices: ["ごちそうさまでした", "ごめんください", "お大事に"],
    answer: 0,
    explanation:
      "Setelah makan, ucapkan ごちそうさまでした.",
  },
  {
    id: 57,
    section: "Expression",
    category: "自己紹介",
    scenario: "Pegawai baru memperkenalkan diri.",
    pattern: "どうぞよろしくお願いします",
    meaning: "senang berkenalan / mohon kerja samanya",
    dialogue: [
      ["新人", "はじめまして。アリです。インドネシアから来ました。"],
      ["先輩", "田中です。[blank]。"],
    ],
    choices: ["どうぞよろしくお願いします", "お疲れさまでした", "いただきます"],
    answer: 0,
    explanation:
      "Dalam perkenalan, gunakan どうぞよろしくお願いします.",
  },
  {
    id: 58,
    section: "Expression",
    category: "聞き返し",
    scenario: "Di kelas, siswa tidak mendengar instruksi guru.",
    pattern: "もう一度お願いします",
    meaning: "tolong ulangi sekali lagi",
    dialogue: [
      ["先生", "宿題は20ページまでです。"],
      ["学生", "すみません。[blank]。"],
    ],
    choices: ["もう一度お願いします", "お先に失礼します", "かしこまりました"],
    answer: 0,
    explanation:
      "Saat ingin lawan bicara mengulang, gunakan もう一度お願いします.",
  },
  {
    id: 59,
    section: "Expression",
    category: "提案",
    scenario: "Pelayan menawarkan minuman kepada pelanggan.",
    pattern: "Nは いかがですか",
    meaning: "bagaimana dengan / mau ...?",
    dialogue: [
      ["店員", "お飲み物は [blank]。"],
      ["客", "水をお願いします。"],
    ],
    choices: ["いかがですか", "何名様ですか", "どちらですか"],
    answer: 0,
    explanation:
      "Dalam pelayanan, menawarkan sesuatu dengan sopan memakai いかがですか.",
  },
  {
    id: 60,
    section: "Expression",
    category: "予約",
    scenario: "Seseorang menelepon hotel.",
    pattern: "予約したいんですが",
    meaning: "saya ingin membuat reservasi",
    dialogue: [
      ["ホテル", "はい、さくらホテルでございます。"],
      ["客", "すみません。部屋を [blank]。"],
    ],
    choices: ["予約したいんですが", "食べたいんですが", "見たいんですが"],
    answer: 0,
    explanation:
      "Untuk menyampaikan ingin reservasi dengan sopan, gunakan 予約したいんですが.",
  },
  {
    id: 61,
    section: "Expression",
    category: "おすすめ",
    scenario: "Pelanggan bertanya makanan yang direkomendasikan.",
    pattern: "おすすめは何ですか",
    meaning: "apa rekomendasinya?",
    dialogue: [
      ["客", "すみません。[blank]。"],
      ["店員", "今日のおすすめはカレーです。"],
    ],
    choices: ["おすすめは何ですか", "お名前は何ですか", "お仕事は何ですか"],
    answer: 0,
    explanation:
      "Untuk menanyakan rekomendasi, gunakan おすすめは何ですか.",
  },
  {
    id: 62,
    section: "Expression",
    category: "気遣い",
    scenario: "Teman terlihat tidak sehat di kantor.",
    pattern: "大丈夫ですか",
    meaning: "apakah kamu baik-baik saja?",
    dialogue: [
      ["A", "顔色が悪いですよ。[blank]。"],
      ["B", "少し頭が痛いです。"],
    ],
    choices: ["大丈夫ですか", "おめでとうございます", "いらっしゃいませ"],
    answer: 0,
    explanation:
      "Saat mengkhawatirkan kondisi orang lain, gunakan 大丈夫ですか.",
  },
  {
    id: 63,
    section: "Expression",
    category: "接客",
    scenario: "Pelayan menerima pesanan pelanggan.",
    pattern: "かしこまりました",
    meaning: "baik, saya mengerti",
    dialogue: [
      ["客", "コーヒーを一つください。"],
      ["店員", "[blank]。少々お待ちください。"],
    ],
    choices: ["かしこまりました", "ただいま", "おかげさまで"],
    answer: 0,
    explanation:
      "Dalam layanan pelanggan, menerima pesanan dengan sopan memakai かしこまりました.",
  },
  {
    id: 64,
    section: "Expression",
    category: "職場",
    scenario: "Pegawai pulang lebih dulu dari kantor.",
    pattern: "お先に失礼します",
    meaning: "saya permisi pulang dulu",
    dialogue: [
      ["社員", "[blank]。"],
      ["同僚", "お疲れさまでした。"],
    ],
    choices: ["お先に失礼します", "いただきます", "ごめんください"],
    answer: 0,
    explanation:
      "Saat pulang lebih dulu dari kantor, ucapkan お先に失礼します.",
  },
  {
    id: 65,
    section: "Expression",
    category: "感謝",
    scenario: "Seseorang dibantu membawa barang berat.",
    pattern: "助かりました",
    meaning: "sangat terbantu",
    dialogue: [
      ["A", "荷物を持ちましょうか。"],
      ["B", "ありがとうございます。[blank]。"],
    ],
    choices: ["助かりました", "おじゃましました", "いらっしゃいました"],
    answer: 0,
    explanation:
      "Setelah dibantu dan merasa tertolong, gunakan 助かりました.",
  },
  {
    id: 66,
    section: "Grammar",
    category: "可能",
    scenario: "Dua rekan kerja berbicara tentang kemampuan membaca kanji.",
    pattern: "可能形",
    meaning: "bisa melakukan sesuatu",
    dialogue: [
      ["A", "田中さんは漢字が読めますか。"],
      ["B", "はい、少し [blank]。"],
    ],
    choices: ["読みます", "読めます", "読んでいます"],
    answer: 1,
    explanation:
      "Kemampuan membaca memakai bentuk potensial: 読めます.",
  },
  {
    id: 67,
    section: "Grammar",
    category: "経験",
    scenario: "Dua teman berbicara tentang perjalanan ke Okinawa.",
    pattern: "Vた + ことがあります",
    meaning: "pernah melakukan sesuatu",
    dialogue: [
      ["A", "沖縄へ行ったことがありますか。"],
      ["B", "いいえ、まだ [blank]。"],
    ],
    choices: ["ありません", "いません", "しません"],
    answer: 0,
    explanation:
      "Untuk menjawab pengalaman belum pernah, gunakan まだありません.",
  },
  {
    id: 68,
    section: "Grammar",
    category: "時間",
    scenario: "Seorang ibu mengingatkan anaknya sebelum tidur.",
    pattern: "Nの + 前に",
    meaning: "sebelum sesuatu",
    dialogue: [
      ["母", "寝る [blank]、歯をみがいてください。"],
      ["子", "はい。"],
    ],
    choices: ["前に", "後で", "まで"],
    answer: 0,
    explanation:
      "Menyikat gigi dilakukan sebelum tidur, jadi gunakan 寝る前に.",
  },
  {
    id: 69,
    section: "Grammar",
    category: "期間",
    scenario: "Pelajar berbicara tentang hal yang ingin dilakukan selama di Jepang.",
    pattern: "Nの + 間に",
    meaning: "selama periode tertentu",
    dialogue: [
      ["A", "日本にいる間に、何をしたいですか。"],
      ["B", "日本にいる [blank]、富士山に登りたいです。"],
    ],
    choices: ["前に", "後で", "間に"],
    answer: 2,
    explanation:
      "Untuk kegiatan yang ingin dilakukan selama periode tinggal, gunakan 間に.",
  },
  {
    id: 70,
    section: "Grammar",
    category: "付帯",
    scenario: "Siswa datang ke sekolah tanpa sarapan.",
    pattern: "Vないで",
    meaning: "tanpa melakukan sesuatu",
    dialogue: [
      ["先生", "どうして元気がないんですか。"],
      ["学生", "朝ごはんを [blank]、学校に来ました。"],
    ],
    choices: ["食べないで", "食べて", "食べたら"],
    answer: 0,
    explanation:
      "Untuk menyatakan tanpa sarapan, gunakan 食べないで.",
  },
  {
    id: 71,
    section: "Grammar",
    category: "時間",
    scenario: "Teman meminta telepon setelah pekerjaan selesai.",
    pattern: "Vて + から",
    meaning: "setelah melakukan sesuatu",
    dialogue: [
      ["A", "いつ電話しますか。"],
      ["B", "仕事が終わって [blank]、電話します。"],
    ],
    choices: ["まで", "から", "ながら"],
    answer: 1,
    explanation:
      "Untuk urutan setelah pekerjaan selesai, gunakan 終わってから.",
  },
  {
    id: 72,
    section: "Grammar",
    category: "時間",
    scenario: "Dua teman berbicara tentang masa kecil.",
    pattern: "Nの + とき",
    meaning: "ketika / saat",
    dialogue: [
      ["A", "子どものとき、よく何をしましたか。"],
      ["B", "子どもの [blank]、川で泳ぎました。"],
    ],
    choices: ["ところ", "とき", "ため"],
    answer: 1,
    explanation:
      "Saat menyebut waktu masa kecil, gunakan 子どものとき.",
  },
  {
    id: 73,
    section: "Grammar",
    category: "条件",
    scenario: "Dua teman membicarakan rencana jika ada waktu.",
    pattern: "条件形 + ば",
    meaning: "jika / kalau",
    dialogue: [
      ["A", "今週、映画を見に行きませんか。"],
      ["B", "時間が [blank]、行きたいです。"],
    ],
    choices: ["あると", "あれば", "あって"],
    answer: 1,
    explanation:
      "Untuk kondisi 'kalau ada waktu', gunakan あれば.",
  },
  {
    id: 74,
    section: "Grammar",
    category: "形容詞接続",
    scenario: "Teman menjelaskan kamar barunya.",
    pattern: "イ形容詞い -> くて",
    meaning: "menghubungkan dua sifat",
    dialogue: [
      ["A", "新しい部屋はどうですか。"],
      ["B", "広 [blank]、きれいです。"],
    ],
    choices: ["いで", "くて", "いと"],
    answer: 1,
    explanation:
      "Untuk menghubungkan イ形容詞, ubah い menjadi くて: 広くて.",
  },
  {
    id: 75,
    section: "Grammar",
    category: "選択",
    scenario: "Pelanggan memilih menu di restoran.",
    pattern: "Nにします",
    meaning: "memilih / memutuskan",
    dialogue: [
      ["店員", "ご注文は何になさいますか。"],
      ["客", "私はカレー [blank]。"],
    ],
    choices: ["があります", "にします", "をします"],
    answer: 1,
    explanation:
      "Saat memilih menu, gunakan Nにします.",
  },
  {
    id: 76,
    section: "Grammar",
    category: "義務",
    scenario: "Siswa berbicara tentang PR bahasa Jepang.",
    pattern: "Vなければなりません",
    meaning: "harus melakukan sesuatu",
    dialogue: [
      ["A", "今日も宿題がありますか。"],
      ["B", "はい。毎日、漢字を練習し [blank]。"],
    ],
    choices: ["なければなりません", "てもいいです", "ないでください"],
    answer: 0,
    explanation:
      "Kewajiban formal dinyatakan dengan Vなければなりません.",
  },
  {
    id: 77,
    section: "Grammar",
    category: "逆接条件",
    scenario: "Teman tetap pergi meskipun hujan.",
    pattern: "Vて + も",
    meaning: "meskipun",
    dialogue: [
      ["A", "明日、雨ですよ。"],
      ["B", "雨が降っ [blank]、行きます。"],
    ],
    choices: ["たら", "ても", "てから"],
    answer: 1,
    explanation:
      "Untuk 'meskipun hujan', gunakan 降っても.",
  },
  {
    id: 78,
    section: "Grammar",
    category: "評価",
    scenario: "Teman menilai kamus elektronik.",
    pattern: "Vます形 + やすい",
    meaning: "mudah untuk melakukan sesuatu",
    dialogue: [
      ["A", "この辞書はどうですか。"],
      ["B", "字が大きいので、使い [blank] です。"],
    ],
    choices: ["やすい", "にくい", "たい"],
    answer: 0,
    explanation:
      "Mudah digunakan dinyatakan dengan 使いやすいです.",
  },
  {
    id: 79,
    section: "Grammar",
    category: "評価",
    scenario: "Pelajar mengatakan kanji sulit diingat.",
    pattern: "Vます形 + にくい",
    meaning: "sulit untuk melakukan sesuatu",
    dialogue: [
      ["A", "この漢字は覚えましたか。"],
      ["B", "いいえ、形が複雑で、覚え [blank] です。"],
    ],
    choices: ["やすい", "にくい", "たい"],
    answer: 1,
    explanation:
      "Sulit diingat dinyatakan dengan 覚えにくいです.",
  },
  {
    id: 80,
    section: "Grammar",
    category: "予定・意志",
    scenario: "Teman berbicara tentang rencana tahun depan.",
    pattern: "V辞書形 + 予定です",
    meaning: "berencana melakukan sesuatu",
    dialogue: [
      ["A", "来年は何をしますか。"],
      ["B", "日本へ留学する [blank]。"],
    ],
    choices: ["予定です", "ところです", "ことです"],
    answer: 0,
    explanation:
      "Rencana yang sudah dipikirkan dapat dinyatakan dengan 予定です.",
  },
  {
    id: 81,
    section: "Expression",
    category: "依頼",
    scenario: "Seseorang ingin bertanya kepada petugas.",
    pattern: "すみませんが",
    meaning: "maaf, tetapi / permisi",
    dialogue: [
      ["客", "[blank]、トイレはどこですか。"],
      ["店員", "あちらです。"],
    ],
    choices: ["いただきます", "すみませんが", "ごちそうさま"],
    answer: 1,
    explanation:
      "Sebelum bertanya dengan sopan, gunakan すみませんが.",
  },
  {
    id: 82,
    section: "Expression",
    category: "職場",
    scenario: "Rekan kerja saling menyapa di kantor.",
    pattern: "お疲れさまです",
    meaning: "sapaan sopan di tempat kerja",
    dialogue: [
      ["A", "おはようございます。"],
      ["B", "[blank]。今日もよろしくお願いします。"],
    ],
    choices: ["お疲れさまです", "お大事に", "おじゃまします"],
    answer: 0,
    explanation:
      "Di tempat kerja, お疲れさまです sering dipakai sebagai sapaan sopan.",
  },
  {
    id: 83,
    section: "Expression",
    category: "接客",
    scenario: "Pelayan kembali setelah pelanggan menunggu.",
    pattern: "お待たせしました",
    meaning: "maaf sudah membuat Anda menunggu",
    dialogue: [
      ["店員", "[blank]。こちらがメニューです。"],
      ["客", "ありがとうございます。"],
    ],
    choices: ["お待たせしました", "お先に失礼します", "おかえりなさい"],
    answer: 0,
    explanation:
      "Setelah membuat pelanggan menunggu, gunakan お待たせしました.",
  },
  {
    id: 84,
    section: "Expression",
    category: "案内",
    scenario: "Tuan rumah mempersilakan tamu masuk.",
    pattern: "どうぞ",
    meaning: "silakan",
    dialogue: [
      ["客", "ごめんください。"],
      ["家の人", "いらっしゃい。[blank] 入ってください。"],
    ],
    choices: ["どうぞ", "たぶん", "ちょっと"],
    answer: 0,
    explanation:
      "Untuk mempersilakan seseorang, gunakan どうぞ.",
  },
  {
    id: 85,
    section: "Expression",
    category: "会計",
    scenario: "Pelanggan selesai makan di restoran.",
    pattern: "お会計お願いします",
    meaning: "tolong hitung tagihannya",
    dialogue: [
      ["客", "すみません。[blank]。"],
      ["店員", "はい、少々お待ちください。"],
    ],
    choices: ["お会計お願いします", "お大事に", "お名前は何ですか"],
    answer: 0,
    explanation:
      "Untuk meminta tagihan di restoran, gunakan お会計お願いします.",
  },
  {
    id: 86,
    section: "Expression",
    category: "会計",
    scenario: "Dua teman ingin membayar sendiri-sendiri.",
    pattern: "別々でお願いします",
    meaning: "bayar terpisah",
    dialogue: [
      ["店員", "お会計はご一緒ですか。"],
      ["客", "すみません、[blank]。"],
    ],
    choices: ["別々でお願いします", "店内でお願いします", "大盛りでお願いします"],
    answer: 0,
    explanation:
      "Saat ingin membayar terpisah, gunakan 別々でお願いします.",
  },
  {
    id: 87,
    section: "Expression",
    category: "注文",
    scenario: "Pelanggan membeli makanan untuk dibawa pulang.",
    pattern: "持ち帰りでお願いします",
    meaning: "untuk dibawa pulang",
    dialogue: [
      ["店員", "こちらで召し上がりますか。"],
      ["客", "[blank]。"],
    ],
    choices: ["持ち帰りでお願いします", "予約でお願いします", "右にお願いします"],
    answer: 0,
    explanation:
      "Untuk take away, gunakan 持ち帰りでお願いします.",
  },
  {
    id: 88,
    section: "Expression",
    category: "注文",
    scenario: "Pelanggan makan di restoran, bukan dibawa pulang.",
    pattern: "店内で食べます",
    meaning: "makan di tempat",
    dialogue: [
      ["店員", "お持ち帰りですか。"],
      ["客", "いいえ、[blank]。"],
    ],
    choices: ["店内で食べます", "家で寝ます", "駅で待ちます"],
    answer: 0,
    explanation:
      "Jika makan di tempat, jawab 店内で食べます.",
  },
  {
    id: 89,
    section: "Expression",
    category: "道案内",
    scenario: "Seseorang bertanya arah dengan sopan.",
    pattern: "教えていただけませんか",
    meaning: "bisakah Anda memberi tahu saya?",
    dialogue: [
      ["A", "すみません。駅までの道を [blank]。"],
      ["B", "はい、いいですよ。"],
    ],
    choices: ["教えていただけませんか", "食べていただけませんか", "払っていただけませんか"],
    answer: 0,
    explanation:
      "Permintaan sangat sopan memakai ていただけませんか.",
  },
  {
    id: 90,
    section: "Expression",
    category: "道案内",
    scenario: "Petugas menjelaskan arah ke stasiun.",
    pattern: "まっすぐ行ってください",
    meaning: "silakan jalan lurus",
    dialogue: [
      ["A", "駅はどこですか。"],
      ["B", "この道を [blank]。"],
    ],
    choices: ["まっすぐ行ってください", "ここで食べてください", "名前を書いてください"],
    answer: 0,
    explanation:
      "Untuk memberi instruksi jalan lurus, gunakan まっすぐ行ってください.",
  },
  {
    id: 91,
    section: "Expression",
    category: "道案内",
    scenario: "Petugas menjelaskan belokan menuju kantor pos.",
    pattern: "右に曲がってください",
    meaning: "belok kanan",
    dialogue: [
      ["A", "郵便局はどこですか。"],
      ["B", "次の信号を [blank]。"],
    ],
    choices: ["右に曲がってください", "水を飲んでください", "席に座ってください"],
    answer: 0,
    explanation:
      "Untuk memberi arah belok kanan, gunakan 右に曲がってください.",
  },
  {
    id: 92,
    section: "Expression",
    category: "予約",
    scenario: "Pelanggan bertanya apakah ada kamar kosong.",
    pattern: "空いていますか",
    meaning: "apakah tersedia / kosong?",
    dialogue: [
      ["客", "今晩、部屋は [blank]。"],
      ["ホテル", "はい、一部屋ございます。"],
    ],
    choices: ["空いていますか", "開けていますか", "住んでいますか"],
    answer: 0,
    explanation:
      "Untuk menanyakan ketersediaan kamar atau tempat, gunakan 空いていますか.",
  },
  {
    id: 93,
    section: "Expression",
    category: "買い物",
    scenario: "Pelanggan mencari ukuran baju.",
    pattern: "Mサイズはありますか",
    meaning: "apakah ada ukuran M?",
    dialogue: [
      ["客", "すみません。[blank]。"],
      ["店員", "はい、こちらにあります。"],
    ],
    choices: ["Mサイズはありますか", "Mサイズは食べますか", "Mサイズは行きますか"],
    answer: 0,
    explanation:
      "Untuk menanyakan ketersediaan ukuran, gunakan サイズはありますか.",
  },
  {
    id: 94,
    section: "Expression",
    category: "買い物",
    scenario: "Pelanggan ingin mencoba pakaian.",
    pattern: "試着してもいいですか",
    meaning: "bolehkah saya mencoba?",
    dialogue: [
      ["客", "このシャツを [blank]。"],
      ["店員", "はい、どうぞ。"],
    ],
    choices: ["試着してもいいですか", "予約してもいいですか", "早退してもいいですか"],
    answer: 0,
    explanation:
      "Untuk meminta izin mencoba pakaian, gunakan 試着してもいいですか.",
  },
  {
    id: 95,
    section: "Expression",
    category: "買い物",
    scenario: "Pelanggan meminta struk setelah membayar.",
    pattern: "レシートをください",
    meaning: "tolong beri struk",
    dialogue: [
      ["店員", "ありがとうございました。"],
      ["客", "すみません。[blank]。"],
    ],
    choices: ["レシートをください", "テーブルをください", "住所をください"],
    answer: 0,
    explanation:
      "Untuk meminta struk, gunakan レシートをください.",
  },
  {
    id: 96,
    section: "Expression",
    category: "健康",
    scenario: "Seseorang merasa tidak enak badan.",
    pattern: "気分が悪いです",
    meaning: "saya merasa tidak enak badan",
    dialogue: [
      ["A", "どうしましたか。"],
      ["B", "[blank]。少し休みたいです。"],
    ],
    choices: ["気分が悪いです", "気分が安いです", "気分が新しいです"],
    answer: 0,
    explanation:
      "Untuk mengatakan kondisi badan tidak enak, gunakan 気分が悪いです.",
  },
  {
    id: 97,
    section: "Expression",
    category: "健康",
    scenario: "Pasien menjelaskan gejala kepada dokter.",
    pattern: "熱があります",
    meaning: "demam",
    dialogue: [
      ["医者", "どんな症状ですか。"],
      ["患者", "頭が痛くて、[blank]。"],
    ],
    choices: ["熱があります", "席があります", "駅があります"],
    answer: 0,
    explanation:
      "Untuk menyatakan demam, gunakan 熱があります.",
  },
  {
    id: 98,
    section: "Expression",
    category: "病院",
    scenario: "Resepsionis klinik bertanya kepada pasien.",
    pattern: "保険証をお持ちですか",
    meaning: "apakah membawa kartu asuransi?",
    dialogue: [
      ["受付", "[blank]。"],
      ["患者", "はい、持っています。"],
    ],
    choices: ["保険証をお持ちですか", "切符を買いましたか", "料理を作りますか"],
    answer: 0,
    explanation:
      "Di klinik, petugas biasanya bertanya 保険証をお持ちですか.",
  },
  {
    id: 99,
    section: "Expression",
    category: "予約",
    scenario: "Seseorang menelepon untuk membatalkan reservasi.",
    pattern: "予約をキャンセルしたいんですが",
    meaning: "saya ingin membatalkan reservasi",
    dialogue: [
      ["店員", "はい、さくらレストランです。"],
      ["客", "すみません。予約を [blank]。"],
    ],
    choices: ["キャンセルしたいんですが", "勉強したいんですが", "紹介したいんですが"],
    answer: 0,
    explanation:
      "Untuk membatalkan reservasi dengan sopan, gunakan キャンセルしたいんですが.",
  },
  {
    id: 100,
    section: "Expression",
    category: "断り",
    scenario: "Teman menolak ajakan secara halus.",
    pattern: "また今度お願いします",
    meaning: "lain kali saja",
    dialogue: [
      ["A", "今晩、カラオケに行きませんか。"],
      ["B", "すみません。今日は用事があります。[blank]。"],
    ],
    choices: ["また今度お願いします", "お会計お願いします", "少々お待ちください"],
    answer: 0,
    explanation:
      "Untuk menolak ajakan dengan halus dan membuka kesempatan lain kali, gunakan また今度お願いします.",
  },
  {
    id: 101,
    section: "Vocabulary",
    category: "語彙意味",
    scenario: "Pilih arti kata Jepang yang paling tepat.",
    pattern: "語彙: 受付",
    meaning: "resepsionis / loket pendaftaran",
    dialogue: [["問題", "「受付」の意味は何ですか。"]],
    choices: ["tempat pendaftaran", "ruang kelas", "tempat sampah"],
    answer: 0,
    explanation: "受付 adalah tempat menerima tamu atau pendaftaran, seperti resepsionis.",
  },
  {
    id: 102,
    section: "Vocabulary",
    category: "語彙意味",
    scenario: "Pilih arti kata Jepang yang paling tepat.",
    pattern: "語彙: 予約",
    meaning: "reservasi",
    dialogue: [["問題", "「予約」の意味は何ですか。"]],
    choices: ["reservasi", "pembayaran", "pemeriksaan"],
    answer: 0,
    explanation: "予約 berarti memesan tempat, kamar, tiket, atau jadwal terlebih dahulu.",
  },
  {
    id: 103,
    section: "Vocabulary",
    category: "語彙意味",
    scenario: "Pilih arti kata Jepang yang paling tepat.",
    pattern: "語彙: 支払い",
    meaning: "pembayaran",
    dialogue: [["問題", "「支払い」の意味は何ですか。"]],
    choices: ["pembayaran", "undangan", "pengiriman"],
    answer: 0,
    explanation: "支払い berarti pembayaran atau proses membayar.",
  },
  {
    id: 104,
    section: "Vocabulary",
    category: "語彙意味",
    scenario: "Pilih arti kata Jepang yang paling tepat.",
    pattern: "語彙: 変更",
    meaning: "perubahan",
    dialogue: [["問題", "「変更」の意味は何ですか。"]],
    choices: ["perubahan", "larangan", "jawaban"],
    answer: 0,
    explanation: "変更 berarti mengubah jadwal, isi, tempat, atau rencana.",
  },
  {
    id: 105,
    section: "Vocabulary",
    category: "語彙意味",
    scenario: "Pilih arti kata Jepang yang paling tepat.",
    pattern: "語彙: 中止",
    meaning: "dibatalkan / dihentikan",
    dialogue: [["問題", "「中止」の意味は何ですか。"]],
    choices: ["dibatalkan", "dimulai", "diperpanjang"],
    answer: 0,
    explanation: "中止 berarti suatu acara atau kegiatan dihentikan atau dibatalkan.",
  },
  {
    id: 106,
    section: "Vocabulary",
    category: "語彙意味",
    scenario: "Pilih arti kata Jepang yang paling tepat.",
    pattern: "語彙: 必要",
    meaning: "perlu / dibutuhkan",
    dialogue: [["問題", "「必要」の意味は何ですか。"]],
    choices: ["perlu", "mudah", "gratis"],
    answer: 0,
    explanation: "必要 berarti sesuatu yang dibutuhkan atau wajib disiapkan.",
  },
  {
    id: 107,
    section: "Vocabulary",
    category: "語彙意味",
    scenario: "Pilih arti kata Jepang yang paling tepat.",
    pattern: "語彙: 無料",
    meaning: "gratis",
    dialogue: [["問題", "「無料」の意味は何ですか。"]],
    choices: ["gratis", "mahal", "tunai"],
    answer: 0,
    explanation: "無料 berarti tidak perlu membayar.",
  },
  {
    id: 108,
    section: "Vocabulary",
    category: "語彙意味",
    scenario: "Pilih arti kata Jepang yang paling tepat.",
    pattern: "語彙: 現金",
    meaning: "uang tunai",
    dialogue: [["問題", "「現金」の意味は何ですか。"]],
    choices: ["uang tunai", "kartu identitas", "struk"],
    answer: 0,
    explanation: "現金 berarti uang tunai, bukan kartu atau pembayaran elektronik.",
  },
  {
    id: 109,
    section: "Vocabulary",
    category: "語彙用法",
    scenario: "Pilih kata yang paling cocok untuk kalimat.",
    pattern: "語彙用法: 忘れ物",
    meaning: "barang tertinggal",
    dialogue: [["問題", "電車にかばんを忘れました。駅の [blank] に聞きます。"]],
    choices: ["忘れ物センター", "台所", "教室"],
    answer: 0,
    explanation: "Barang yang tertinggal ditanyakan di 忘れ物センター.",
  },
  {
    id: 110,
    section: "Vocabulary",
    category: "語彙用法",
    scenario: "Pilih kata yang paling cocok untuk kalimat.",
    pattern: "語彙用法: 診察",
    meaning: "pemeriksaan dokter",
    dialogue: [["問題", "病院で医者に体を見てもらいます。これは [blank] です。"]],
    choices: ["診察", "会計", "旅行"],
    answer: 0,
    explanation: "Pemeriksaan oleh dokter disebut 診察.",
  },
  {
    id: 111,
    section: "Vocabulary",
    category: "語彙用法",
    scenario: "Pilih kata yang paling cocok untuk kalimat.",
    pattern: "語彙用法: 締め切り",
    meaning: "batas waktu",
    dialogue: [["問題", "申込書は金曜日までです。金曜日が [blank] です。"]],
    choices: ["締め切り", "入口", "売り場"],
    answer: 0,
    explanation: "Batas akhir pengumpulan atau pendaftaran disebut 締め切り.",
  },
  {
    id: 112,
    section: "Vocabulary",
    category: "語彙用法",
    scenario: "Pilih kata yang paling cocok untuk kalimat.",
    pattern: "語彙用法: 片道",
    meaning: "sekali jalan",
    dialogue: [["問題", "帰りの切符はいりません。[blank] の切符をください。"]],
    choices: ["片道", "往復", "全部"],
    answer: 0,
    explanation: "Jika hanya pergi tanpa tiket pulang, gunakan 片道.",
  },
  {
    id: 113,
    section: "Vocabulary",
    category: "語彙用法",
    scenario: "Pilih kata yang paling cocok untuk kalimat.",
    pattern: "語彙用法: 往復",
    meaning: "pulang-pergi",
    dialogue: [["問題", "行きと帰りの切符を買います。[blank] の切符です。"]],
    choices: ["往復", "片道", "無料"],
    answer: 0,
    explanation: "Tiket pergi dan pulang disebut 往復.",
  },
  {
    id: 114,
    section: "Vocabulary",
    category: "漢字読み",
    scenario: "Pilih cara baca kanji.",
    pattern: "漢字読み: 病院",
    meaning: "rumah sakit",
    dialogue: [["問題", "「病院」の読み方はどれですか。"]],
    choices: ["びょういん", "びよういん", "びょうえん"],
    answer: 0,
    explanation: "病院 dibaca びょういん.",
  },
  {
    id: 115,
    section: "Vocabulary",
    category: "漢字読み",
    scenario: "Pilih cara baca kanji.",
    pattern: "漢字読み: 会社",
    meaning: "perusahaan",
    dialogue: [["問題", "「会社」の読み方はどれですか。"]],
    choices: ["かいしゃ", "がいしゃ", "かいじゃ"],
    answer: 0,
    explanation: "会社 dibaca かいしゃ.",
  },
  {
    id: 116,
    section: "Vocabulary",
    category: "漢字読み",
    scenario: "Pilih cara baca kanji.",
    pattern: "漢字読み: 住所",
    meaning: "alamat",
    dialogue: [["問題", "「住所」の読み方はどれですか。"]],
    choices: ["じゅうしょ", "じゅしょ", "じょうしょ"],
    answer: 0,
    explanation: "住所 dibaca じゅうしょ.",
  },
  {
    id: 117,
    section: "Vocabulary",
    category: "漢字読み",
    scenario: "Pilih cara baca kanji.",
    pattern: "漢字読み: 電話",
    meaning: "telepon",
    dialogue: [["問題", "「電話」の読み方はどれですか。"]],
    choices: ["でんわ", "てんわ", "でんご"],
    answer: 0,
    explanation: "電話 dibaca でんわ.",
  },
  {
    id: 118,
    section: "Vocabulary",
    category: "漢字読み",
    scenario: "Pilih cara baca kanji.",
    pattern: "漢字読み: 休憩",
    meaning: "istirahat",
    dialogue: [["問題", "「休憩」の読み方はどれですか。"]],
    choices: ["きゅうけい", "きゅけい", "きゅうかい"],
    answer: 0,
    explanation: "休憩 dibaca きゅうけい.",
  },
  {
    id: 119,
    section: "Vocabulary",
    category: "漢字意味",
    scenario: "Pilih arti kanji yang paling tepat.",
    pattern: "漢字意味: 営業時間",
    meaning: "jam buka / jam operasional",
    dialogue: [["問題", "「営業時間」は何のことですか。"]],
    choices: ["店が開いている時間", "電車に乗る時間", "寝る時間"],
    answer: 0,
    explanation: "営業時間 berarti jam operasional toko atau layanan.",
  },
  {
    id: 120,
    section: "Vocabulary",
    category: "漢字意味",
    scenario: "Pilih arti kanji yang paling tepat.",
    pattern: "漢字意味: 定休日",
    meaning: "hari libur tetap",
    dialogue: [["問題", "「定休日」は何のことですか。"]],
    choices: ["毎週決まって休む日", "毎日開く日", "特別に安い日"],
    answer: 0,
    explanation: "定休日 adalah hari tutup rutin, misalnya setiap Selasa.",
  },
  {
    id: 121,
    section: "Reading",
    category: "読解掲示",
    scenario: "Baca pengumuman toko dan pilih jawaban yang tepat.",
    pattern: "掲示: 営業時間",
    meaning: "mencari informasi jam buka",
    dialogue: [
      ["お知らせ", "さくらスーパー\n営業時間: 9:00-21:00\n毎週火曜日は休みです。"],
      ["質問", "このスーパーはいつ休みですか。"],
    ],
    choices: ["火曜日", "日曜日", "毎日"],
    answer: 0,
    explanation: "掲示に「毎週火曜日は休みです」とあります。",
  },
  {
    id: 122,
    section: "Reading",
    category: "読解掲示",
    scenario: "Baca pengumuman restoran dan pilih jawaban yang tepat.",
    pattern: "掲示: ラストオーダー",
    meaning: "mencari informasi batas pesanan",
    dialogue: [
      ["お知らせ", "レストラン海\n営業時間 11:00-22:00\nラストオーダー 21:30"],
      ["質問", "最後に注文できる時間はいつですか。"],
    ],
    choices: ["21:30", "22:00", "11:00"],
    answer: 0,
    explanation: "ラストオーダーは最後に注文できる時間です。",
  },
  {
    id: 123,
    section: "Reading",
    category: "読解メッセージ",
    scenario: "Baca pesan pendek dan pilih jawaban yang tepat.",
    pattern: "メッセージ: 待ち合わせ",
    meaning: "memahami tempat dan waktu janji",
    dialogue: [
      ["メッセージ", "田中さんへ\n今日は駅の東口で18時に会いましょう。雨なので、かさを持ってきてください。"],
      ["質問", "どこで会いますか。"],
    ],
    choices: ["駅の東口", "会社の前", "レストランの中"],
    answer: 0,
    explanation: "メッセージに「駅の東口で18時に」とあります。",
  },
  {
    id: 124,
    section: "Reading",
    category: "読解メッセージ",
    scenario: "Baca pesan dari teman dan pilih jawaban yang tepat.",
    pattern: "メッセージ: 持ち物",
    meaning: "memahami barang yang perlu dibawa",
    dialogue: [
      ["メッセージ", "明日の料理教室は10時からです。エプロンとタオルを持ってきてください。材料はこちらで用意します。"],
      ["質問", "何を持って行きますか。"],
    ],
    choices: ["エプロンとタオル", "材料と皿", "お金と切符"],
    answer: 0,
    explanation: "持ち物は「エプロンとタオル」です。",
  },
  {
    id: 125,
    section: "Reading",
    category: "読解短文",
    scenario: "Baca teks pendek tentang kehidupan sehari-hari.",
    pattern: "短文: 理由",
    meaning: "memahami alasan",
    dialogue: [
      ["本文", "リンさんは毎朝6時に起きます。会社が家から遠いので、7時の電車に乗らなければなりません。"],
      ["質問", "リンさんはどうして早く起きますか。"],
    ],
    choices: ["会社が遠いから", "朝ごはんを作るから", "日本語を勉強するから"],
    answer: 0,
    explanation: "本文に「会社が家から遠いので」とあります。",
  },
  {
    id: 126,
    section: "Reading",
    category: "読解短文",
    scenario: "Baca teks pendek dan pilih jawaban yang tepat.",
    pattern: "短文: 予定",
    meaning: "memahami rencana",
    dialogue: [
      ["本文", "日曜日、アリさんは友だちと公園へ行きます。公園で昼ごはんを食べて、写真を撮る予定です。"],
      ["質問", "アリさんは日曜日に何をしますか。"],
    ],
    choices: ["公園へ行きます", "病院へ行きます", "学校で試験を受けます"],
    answer: 0,
    explanation: "本文の最初に「友だちと公園へ行きます」とあります。",
  },
  {
    id: 127,
    section: "Reading",
    category: "読解情報検索",
    scenario: "Baca informasi kelas dan pilih jawaban yang tepat.",
    pattern: "情報検索: 教室案内",
    meaning: "mencari informasi lokasi",
    dialogue: [
      ["案内", "日本語クラス\n初級: 2階 201教室\n中級: 3階 305教室\n会話クラス: 1階 102教室"],
      ["質問", "会話クラスはどこですか。"],
    ],
    choices: ["1階102教室", "2階201教室", "3階305教室"],
    answer: 0,
    explanation: "案内に「会話クラス: 1階 102教室」とあります。",
  },
  {
    id: 128,
    section: "Reading",
    category: "読解情報検索",
    scenario: "Baca jadwal bus dan pilih jawaban yang tepat.",
    pattern: "情報検索: 時刻表",
    meaning: "mencari waktu keberangkatan",
    dialogue: [
      ["時刻表", "駅行きバス\n8:10 / 8:40 / 9:10 / 9:40"],
      ["質問", "8時30分のあと、いちばん早いバスは何時ですか。"],
    ],
    choices: ["8:40", "9:10", "9:40"],
    answer: 0,
    explanation: "8時30分の後で一番早い時刻は8:40です。",
  },
  {
    id: 129,
    section: "Reading",
    category: "読解掲示",
    scenario: "Baca pengumuman di apartemen.",
    pattern: "掲示: 工事",
    meaning: "memahami tanggal dan isi pengumuman",
    dialogue: [
      ["お知らせ", "水道工事のお知らせ\n6月10日 9:00-12:00\nこの時間は水が使えません。"],
      ["質問", "6月10日の午前中、何ができませんか。"],
    ],
    choices: ["水を使うこと", "電気を使うこと", "外へ出ること"],
    answer: 0,
    explanation: "お知らせに「水が使えません」とあります。",
  },
  {
    id: 130,
    section: "Reading",
    category: "読解掲示",
    scenario: "Baca aturan fasilitas umum.",
    pattern: "掲示: 禁止",
    meaning: "memahami larangan",
    dialogue: [
      ["掲示", "図書館からのお願い\n館内では食べ物を食べないでください。飲み物はふたがあるものだけです。"],
      ["質問", "図書館でしてはいけないことは何ですか。"],
    ],
    choices: ["食べ物を食べること", "本を読むこと", "ふたがある飲み物を飲むこと"],
    answer: 0,
    explanation: "掲示に「食べ物を食べないでください」とあります。",
  },
  {
    id: 131,
    section: "Reading",
    category: "読解メッセージ",
    scenario: "Baca pesan dari atasan di tempat kerja.",
    pattern: "メッセージ: 依頼",
    meaning: "memahami tugas yang diminta",
    dialogue: [
      ["メッセージ", "山田さんへ\n会議の前に、資料を10部コピーしてください。会議は午後2時からです。"],
      ["質問", "山田さんは何をしますか。"],
    ],
    choices: ["資料を10部コピーします", "午後2時に帰ります", "会議室を掃除します"],
    answer: 0,
    explanation: "依頼は「資料を10部コピーしてください」です。",
  },
  {
    id: 132,
    section: "Reading",
    category: "読解短文",
    scenario: "Baca teks pendek tentang belanja.",
    pattern: "短文: 比較",
    meaning: "memahami pilihan",
    dialogue: [
      ["本文", "この店の野菜はスーパーより少し高いですが、とても新鮮です。だから、ミラさんはよくこの店で買います。"],
      ["質問", "ミラさんはどうしてこの店で野菜を買いますか。"],
    ],
    choices: ["野菜が新鮮だから", "野菜が一番安いから", "店が駅に近いから"],
    answer: 0,
    explanation: "本文に「とても新鮮です。だから」とあります。",
  },
  {
    id: 133,
    section: "Reading",
    category: "読解情報検索",
    scenario: "Baca informasi lowongan kerja.",
    pattern: "情報検索: 求人",
    meaning: "mencari syarat kerja",
    dialogue: [
      ["求人", "レストランスタッフ募集\n時間: 17:00-22:00\n時給: 1,150円\n日本語で簡単な会話ができる人"],
      ["質問", "この仕事で必要なことは何ですか。"],
    ],
    choices: ["日本語で簡単な会話ができること", "車を運転できること", "朝から働けること"],
    answer: 0,
    explanation: "求人に「日本語で簡単な会話ができる人」とあります。",
  },
  {
    id: 134,
    section: "Reading",
    category: "読解情報検索",
    scenario: "Baca menu restoran.",
    pattern: "情報検索: メニュー",
    meaning: "mencari harga",
    dialogue: [
      ["メニュー", "カレー 750円\nラーメン 680円\nてんぷら定食 980円\nコーヒー 300円"],
      ["質問", "ラーメンはいくらですか。"],
    ],
    choices: ["680円", "750円", "980円"],
    answer: 0,
    explanation: "メニューに「ラーメン 680円」とあります。",
  },
  {
    id: 135,
    section: "Reading",
    category: "読解掲示",
    scenario: "Baca pengumuman acara komunitas.",
    pattern: "掲示: イベント",
    meaning: "memahami waktu acara",
    dialogue: [
      ["お知らせ", "国際交流パーティー\n日時: 7月5日 18:30-20:30\n場所: 市民センター 2階"],
      ["質問", "パーティーは何時に始まりますか。"],
    ],
    choices: ["18:30", "20:30", "7:05"],
    answer: 0,
    explanation: "日時に「18:30-20:30」とあるので、始まりは18:30です。",
  },
  {
    id: 136,
    section: "Reading",
    category: "読解短文",
    scenario: "Baca teks pendek tentang kesehatan.",
    pattern: "短文: 助言",
    meaning: "memahami saran",
    dialogue: [
      ["本文", "デニさんは最近よく眠れません。医者は、夜コーヒーを飲まないで、早く寝たほうがいいと言いました。"],
      ["質問", "医者は何と言いましたか。"],
    ],
    choices: ["夜コーヒーを飲まないほうがいい", "夜たくさん運動したほうがいい", "朝遅く起きたほうがいい"],
    answer: 0,
    explanation: "本文に「夜コーヒーを飲まないで」とあります。",
  },
  {
    id: 137,
    section: "Reading",
    category: "読解メッセージ",
    scenario: "Baca pesan tentang perubahan jadwal.",
    pattern: "メッセージ: 変更",
    meaning: "memahami perubahan waktu",
    dialogue: [
      ["メッセージ", "すみません。今日の勉強会は19時からではなく、20時からになりました。場所は同じです。"],
      ["質問", "勉強会は何時からですか。"],
    ],
    choices: ["20時", "19時", "場所が変わりました"],
    answer: 0,
    explanation: "「20時からになりました」とあります。",
  },
  {
    id: 138,
    section: "Reading",
    category: "読解掲示",
    scenario: "Baca informasi fasilitas.",
    pattern: "掲示: 利用時間",
    meaning: "mencari waktu penggunaan",
    dialogue: [
      ["掲示", "自転車置き場\n利用時間: 6:00-23:00\n夜23時から朝6時までは入れません。"],
      ["質問", "自転車置き場に入れない時間はいつですか。"],
    ],
    choices: ["23時から6時まで", "6時から23時まで", "昼12時から13時まで"],
    answer: 0,
    explanation: "掲示に「夜23時から朝6時までは入れません」とあります。",
  },
  {
    id: 139,
    section: "Reading",
    category: "読解情報検索",
    scenario: "Baca jadwal pelajaran.",
    pattern: "情報検索: スケジュール",
    meaning: "mencari mata pelajaran pada hari tertentu",
    dialogue: [
      ["予定表", "月: 文法\n火: 会話\n水: 漢字\n木: 読解\n金: 聴解"],
      ["質問", "水曜日は何を勉強しますか。"],
    ],
    choices: ["漢字", "会話", "聴解"],
    answer: 0,
    explanation: "予定表に「水: 漢字」とあります。",
  },
  {
    id: 140,
    section: "Reading",
    category: "読解短文",
    scenario: "Baca teks pendek tentang transportasi.",
    pattern: "短文: 交通",
    meaning: "memahami cara pergi",
    dialogue: [
      ["本文", "駅から会社までは歩いて15分です。雨の日はバスで行きますが、晴れの日は歩きます。"],
      ["質問", "晴れの日、どうやって会社へ行きますか。"],
    ],
    choices: ["歩いて行きます", "バスで行きます", "電車で行きます"],
    answer: 0,
    explanation: "本文に「晴れの日は歩きます」とあります。",
  },
  {
    id: 141,
    section: "Expression",
    category: "役所",
    canDo: "cityhall",
    scenario: "Warga ingin mengurus perubahan alamat di kantor pemerintah.",
    pattern: "住所変更をしたいんですが",
    meaning: "ingin mengurus perubahan alamat",
    dialogue: [
      ["住民", "すみません。住所変更を [blank]。"],
      ["職員", "では、この用紙に書いてください。"],
    ],
    choices: ["したいんですが", "しています", "しますか"],
    answer: 0,
    explanation: "相談するときは「Vたいんですが」を使うと自然です。",
  },
  {
    id: 142,
    section: "Vocabulary",
    category: "役所",
    canDo: "cityhall",
    scenario: "Petugas meminta kartu izin tinggal.",
    pattern: "在留カードを見せてください",
    meaning: "tolong tunjukkan kartu izin tinggal",
    dialogue: [
      ["職員", "[blank] を見せてください。"],
      ["住民", "はい、どうぞ。"],
    ],
    choices: ["在留カード", "診察券", "定期券"],
    answer: 0,
    explanation: "役所の手続きでよく使う身分証明は「在留カード」です。",
  },
  {
    id: 143,
    section: "Grammar",
    category: "役所",
    canDo: "cityhall",
    scenario: "Petugas meminta warga menulis nama dan alamat di formulir.",
    pattern: "この用紙に書いてください",
    meaning: "tolong tulis di formulir ini",
    dialogue: [
      ["職員", "この用紙 [blank] 名前と住所を書いてください。"],
      ["住民", "はい、わかりました。"],
    ],
    choices: ["に", "で", "を"],
    answer: 0,
    explanation: "書く場所を表すときは「用紙に書く」と言います。",
  },
  {
    id: 144,
    section: "Expression",
    category: "役所",
    canDo: "cityhall",
    scenario: "Petugas meminta pengunjung mengambil nomor antrean.",
    pattern: "番号札を取ってください",
    meaning: "tolong ambil nomor antrean",
    dialogue: [
      ["職員", "まず、番号札を [blank]、お待ちください。"],
      ["住民", "はい。"],
    ],
    choices: ["取って", "置いて", "払って"],
    answer: 0,
    explanation: "番号札は「取る」を使います。文を続けるので「取って」です。",
  },
  {
    id: 145,
    section: "Expression",
    category: "役所",
    canDo: "cityhall",
    scenario: "Warga bertanya di mana bisa mendapatkan surat domisili.",
    pattern: "どこでもらえますか",
    meaning: "di mana bisa mendapatkannya",
    dialogue: [
      ["住民", "すみません。住民票はどこで [blank]。"],
      ["職員", "3番の窓口でもらえます。"],
    ],
    choices: ["もらえますか", "もらいましたか", "もっていますか"],
    answer: 0,
    explanation: "可能形を使って「もらえますか」と聞きます。",
  },
  {
    id: 146,
    section: "Grammar",
    category: "役所",
    canDo: "cityhall",
    scenario: "Petugas menjelaskan batas akhir penyerahan dokumen.",
    pattern: "来週までに出してください",
    meaning: "serahkan paling lambat minggu depan",
    dialogue: [
      ["職員", "この書類は来週 [blank] 出してください。"],
      ["住民", "はい、わかりました。"],
    ],
    choices: ["までに", "まで", "から"],
    answer: 0,
    explanation: "締め切りを言うときは「までに」を使います。",
  },
  {
    id: 147,
    section: "Expression",
    category: "役所",
    canDo: "cityhall",
    scenario: "Warga bertanya nomor loket yang harus dikunjungi.",
    pattern: "窓口は何番ですか",
    meaning: "loketnya nomor berapa",
    dialogue: [
      ["住民", "すみません。保険の窓口は [blank]。"],
      ["職員", "5番です。"],
    ],
    choices: ["何番ですか", "何時ですか", "何人ですか"],
    answer: 0,
    explanation: "番号を聞くときは「何番ですか」を使います。",
  },
  {
    id: 148,
    section: "Expression",
    category: "役所",
    canDo: "cityhall",
    scenario: "Petugas meminta warga menandatangani dokumen.",
    pattern: "ここにサインしてください",
    meaning: "tolong tanda tangan di sini",
    dialogue: [
      ["職員", "内容を確認して、ここに [blank] ください。"],
      ["住民", "はい。"],
    ],
    choices: ["サインして", "サインします", "サインしました"],
    answer: 0,
    explanation: "依頼は「て形 + ください」です。",
  },
  {
    id: 149,
    section: "Vocabulary",
    category: "役所",
    canDo: "cityhall",
    scenario: "Petugas menjelaskan dokumen yang diperlukan untuk prosedur.",
    pattern: "本人確認書類が必要です",
    meaning: "dokumen identitas diperlukan",
    dialogue: [
      ["職員", "手続きには本人確認書類が [blank]。"],
      ["住民", "在留カードでいいですか。"],
    ],
    choices: ["必要です", "無料です", "便利です"],
    answer: 0,
    explanation: "手続きに必要なものを言うときは「必要です」を使います。",
  },
  {
    id: 150,
    section: "Expression",
    category: "役所",
    canDo: "cityhall",
    scenario: "Warga tidak tahu cara mengisi formulir.",
    pattern: "書き方を教えていただけますか",
    meaning: "bisakah menjelaskan cara menulisnya",
    dialogue: [
      ["住民", "すみません。申請書の書き方を [blank]。"],
      ["職員", "はい、説明します。"],
    ],
    choices: ["教えていただけますか", "教えましたか", "教えていますか"],
    answer: 0,
    explanation: "丁寧にお願いするときは「教えていただけますか」が自然です。",
  },
  {
    id: 151,
    section: "Expression",
    category: "住まい",
    canDo: "housing",
    scenario: "Seseorang sedang mencari kamar untuk ditinggali.",
    pattern: "部屋を探しています",
    meaning: "sedang mencari kamar",
    dialogue: [
      ["客", "すみません。部屋を [blank]。"],
      ["店員", "どんな部屋がいいですか。"],
    ],
    choices: ["探しています", "探しました", "探しますか"],
    answer: 0,
    explanation: "今していることは「Vています」で表します。",
  },
  {
    id: 152,
    section: "Vocabulary",
    category: "住まい",
    canDo: "housing",
    scenario: "Calon penyewa menanyakan biaya sewa bulanan.",
    pattern: "家賃はいくらですか",
    meaning: "berapa biaya sewa",
    dialogue: [
      ["客", "この部屋の家賃は [blank]。"],
      ["店員", "月7万円です。"],
    ],
    choices: ["いくらですか", "いつですか", "どこですか"],
    answer: 0,
    explanation: "値段や料金を聞くときは「いくらですか」を使います。",
  },
  {
    id: 153,
    section: "Grammar",
    category: "住まい",
    canDo: "housing",
    scenario: "Calon penyewa bertanya apakah apartemen dekat dari stasiun.",
    pattern: "駅から近いですか",
    meaning: "apakah dekat dari stasiun",
    dialogue: [
      ["客", "このアパートは駅 [blank] 近いですか。"],
      ["店員", "はい、歩いて5分です。"],
    ],
    choices: ["から", "まで", "を"],
    answer: 0,
    explanation: "距離の起点は「から」で表します。",
  },
  {
    id: 154,
    section: "Expression",
    category: "住まい",
    canDo: "housing",
    scenario: "Penghuni melapor bahwa AC rusak.",
    pattern: "エアコンが壊れています",
    meaning: "AC sedang rusak",
    dialogue: [
      ["住人", "すみません。エアコンが [blank]。"],
      ["管理人", "すぐ確認します。"],
    ],
    choices: ["壊れています", "壊します", "壊れたいです"],
    answer: 0,
    explanation: "壊れた状態が続いているので「壊れています」です。",
  },
  {
    id: 155,
    section: "Expression",
    category: "住まい",
    canDo: "housing",
    scenario: "Penghuni melapor bahwa air di dapur tidak keluar.",
    pattern: "水が出ません",
    meaning: "air tidak keluar",
    dialogue: [
      ["住人", "台所の水が [blank]。"],
      ["管理人", "それは困りましたね。"],
    ],
    choices: ["出ません", "出ます", "出ました"],
    answer: 0,
    explanation: "水が出ない状態は「水が出ません」と言います。",
  },
  {
    id: 156,
    section: "Expression",
    category: "住まい",
    canDo: "housing",
    scenario: "Penghuni baru bertanya hari membuang sampah.",
    pattern: "ごみはいつ出しますか",
    meaning: "kapan membuang sampah",
    dialogue: [
      ["住人", "燃えるごみはいつ [blank]。"],
      ["隣人", "月曜日と木曜日です。"],
    ],
    choices: ["出しますか", "出しましたか", "出ていますか"],
    answer: 0,
    explanation: "予定や習慣を聞くときは「出しますか」が自然です。",
  },
  {
    id: 157,
    section: "Vocabulary",
    category: "住まい",
    canDo: "housing",
    scenario: "Seseorang menceritakan rencana pindahan bulan depan.",
    pattern: "来月引っ越します",
    meaning: "akan pindah bulan depan",
    dialogue: [
      ["友人", "いつ引っ越しますか。"],
      ["住人", "[blank] 引っ越します。"],
    ],
    choices: ["来月", "昨日", "去年"],
    answer: 0,
    explanation: "これからの予定なので「来月」が合います。",
  },
  {
    id: 158,
    section: "Expression",
    category: "住まい",
    canDo: "housing",
    scenario: "Calon penyewa bertanya apakah boleh tinggal bersama keluarga.",
    pattern: "家族と住んでもいいですか",
    meaning: "bolehkah tinggal bersama keluarga",
    dialogue: [
      ["客", "この部屋に家族と [blank]。"],
      ["店員", "はい、大丈夫です。"],
    ],
    choices: ["住んでもいいですか", "住んでいます", "住みました"],
    answer: 0,
    explanation: "許可を聞くときは「て形 + もいいですか」を使います。",
  },
  {
    id: 159,
    section: "Expression",
    category: "住まい",
    canDo: "housing",
    scenario: "Penghuni berkonsultasi karena kamar sebelah berisik.",
    pattern: "隣の部屋がうるさいんですが",
    meaning: "kamar sebelah berisik, ingin berkonsultasi",
    dialogue: [
      ["住人", "すみません。隣の部屋が [blank]。"],
      ["管理人", "そうですか。確認します。"],
    ],
    choices: ["うるさいんですが", "うるさくないです", "うるさいでした"],
    answer: 0,
    explanation: "困って相談するときは「んですが」を使うと自然です。",
  },
  {
    id: 160,
    section: "Grammar",
    category: "住まい",
    canDo: "housing",
    scenario: "Teman memberi saran agar menghubungi pengelola gedung.",
    pattern: "管理人に連絡したほうがいいです",
    meaning: "lebih baik menghubungi pengelola",
    dialogue: [
      ["住人", "エアコンが壊れています。"],
      ["友人", "管理人に連絡 [blank]。"],
    ],
    choices: ["したほうがいいです", "しないほうがいいです", "してはいけません"],
    answer: 0,
    explanation: "助言するときは「た形 + ほうがいいです」を使います。",
  },
  {
    id: 161,
    section: "Expression",
    category: "予約",
    canDo: "reservation",
    scenario: "Pelanggan ingin membuat reservasi restoran.",
    pattern: "予約したいです",
    meaning: "ingin reservasi",
    dialogue: [
      ["客", "すみません。金曜日に予約 [blank]。"],
      ["店員", "何時がよろしいですか。"],
    ],
    choices: ["したいです", "しています", "しました"],
    answer: 0,
    explanation: "希望を言うときは「ます形 + たいです」を使います。",
  },
  {
    id: 162,
    section: "Expression",
    category: "予約",
    canDo: "reservation",
    scenario: "Pelanggan ingin mengubah jam reservasi.",
    pattern: "時間を変更できますか",
    meaning: "bisakah mengubah jam",
    dialogue: [
      ["客", "予約の時間を [blank]。"],
      ["店員", "はい、大丈夫です。"],
    ],
    choices: ["変更できますか", "変更しましたか", "変更しています"],
    answer: 0,
    explanation: "可能かどうか聞くときは「できますか」を使います。",
  },
  {
    id: 163,
    section: "Expression",
    category: "予約",
    canDo: "reservation",
    scenario: "Pelanggan ingin membatalkan reservasi.",
    pattern: "予約をキャンセルしたいです",
    meaning: "ingin membatalkan reservasi",
    dialogue: [
      ["客", "すみません。予約を [blank]。"],
      ["店員", "かしこまりました。"],
    ],
    choices: ["キャンセルしたいです", "キャンセルしています", "キャンセルでした"],
    answer: 0,
    explanation: "キャンセルしたい希望を伝えるので「したいです」が合います。",
  },
  {
    id: 164,
    section: "Expression",
    category: "予約",
    canDo: "reservation",
    scenario: "Pelanggan mengonfirmasi reservasi atas nama Tanaka.",
    pattern: "田中で予約しています",
    meaning: "reservasi atas nama Tanaka",
    dialogue: [
      ["店員", "お名前をお願いします。"],
      ["客", "田中 [blank] 予約しています。"],
    ],
    choices: ["で", "に", "を"],
    answer: 0,
    explanation: "予約名を言うときは「田中で予約しています」と言います。",
  },
];

const CAN_DO_AREAS = [
  {
    id: "shopping",
    labelJa: "買い物",
    labelId: "Belanja",
    description: "Harga, ukuran, pembayaran, struk, kantong, dan percakapan di toko.",
    keywords: ["買い物", "買", "店", "シャツ", "サイズ", "レシート", "袋", "現金", "支払い", "商品", "売り場", "安い"],
  },
  {
    id: "transport",
    labelJa: "交通",
    labelId: "Transportasi",
    description: "Tiket, stasiun, bus, kereta, waktu tempuh, dan perpindahan kendaraan.",
    keywords: ["交通", "電車", "バス", "切符", "乗", "駅員", "タクシー", "野球試合", "中止"],
  },
  {
    id: "hospital",
    labelJa: "病院",
    labelId: "Rumah sakit",
    description: "Gejala, obat, larangan, saran dokter, dan percakapan dengan petugas.",
    keywords: ["病院", "医者", "患者", "薬", "風邪", "熱", "頭", "痛", "診察", "保険証", "お大事"],
  },
  {
    id: "cityhall",
    labelJa: "役所",
    labelId: "Kantor pemerintah",
    description: "Formulir, kartu izin tinggal, alamat, loket, antrean, dan dokumen.",
    keywords: ["役所", "市役所", "住民", "職員", "書類", "申請", "在留", "住所", "窓口", "番号札", "用紙"],
  },
  {
    id: "workplace",
    labelJa: "職場",
    labelId: "Tempat kerja",
    description: "Salam kerja, alat kantor, rapat, laporan, izin, dan komunikasi kerja.",
    keywords: ["職場", "仕事", "会社", "社員", "同僚", "上司", "会議", "コピー", "機械", "レポート", "お疲れ", "失礼します"],
  },
  {
    id: "housing",
    labelJa: "住まい",
    labelId: "Tempat tinggal",
    description: "Kamar, apartemen, sewa, fasilitas rusak, sampah, dan pindahan.",
    keywords: ["住まい", "部屋", "アパート", "家賃", "エアコン", "台所", "ごみ", "引っ越", "田舎", "町", "家族と住"],
  },
  {
    id: "food",
    labelJa: "食事",
    labelId: "Makan",
    description: "Restoran, menu, pesanan, rekomendasi, rasa, dan ucapan makan.",
    keywords: ["食事", "食", "料理", "メニュー", "定食", "天ぷら", "レストラン", "注文", "会計", "おすすめ", "いただきます", "ごちそう"],
  },
  {
    id: "reservation",
    labelJa: "予約",
    labelId: "Reservasi",
    description: "Membuat, mengubah, membatalkan, dan mengonfirmasi reservasi.",
    keywords: ["予約", "キャンセル", "変更", "空いて", "満席", "席", "名前", "電話番号", "ホテル", "泊"],
  },
  {
    id: "directions",
    labelJa: "道案内",
    labelId: "Petunjuk jalan",
    description: "Arah, lokasi, rute, pintu keluar, dan lama perjalanan.",
    keywords: ["道案内", "道", "まっすぐ", "曲が", "右", "左", "交差点", "地図", "近く", "郵便局", "東口", "駅はどこ"],
  },
];

const canDoById = Object.fromEntries(CAN_DO_AREAS.map((area) => [area.id, area]));

function questionTextForCanDo(question) {
  return [
    question.category,
    question.scenario,
    question.pattern,
    question.meaning,
    question.explanation,
    question.choices.join(" "),
    question.dialogue.map((line) => line.join(" ")).join(" "),
  ].join(" ");
}

function inferCanDo(question) {
  const text = questionTextForCanDo(question);
  const categoryMap = {
    職場: "workplace",
    食事: "food",
    予約: "reservation",
    接客: "food",
    会計: "food",
    注文: "food",
    道案内: "directions",
    買い物: "shopping",
    病院: "hospital",
    健康: "hospital",
    案内: "directions",
  };

  if (categoryMap[question.category]) return categoryMap[question.category];

  let bestArea = CAN_DO_AREAS[0];
  let bestScore = -1;
  CAN_DO_AREAS.forEach((area) => {
    const score = area.keywords.reduce((total, keyword) => total + (text.includes(keyword) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestArea = area;
    }
  });

  if (bestScore > 0) return bestArea.id;
  if (question.section === "Reading") return "directions";
  if (question.section === "Vocabulary") return "workplace";
  return "workplace";
}

questionBank.forEach((question) => {
  question.canDo = question.canDo || inferCanDo(question);
});

function canDoAreaFor(question) {
  return canDoById[question.canDo] || canDoById.workplace;
}

const STORAGE_KEY = "jft-basic-a2-progress-v1";
const TEST_CONFIGS = {
  test: {
    title: "Tes 20",
    size: 20,
    usesFilter: true,
    durationMs: 0,
    lockedText: "Jawab 20 soal dulu",
  },
  mock: {
    title: "Simulasi 50",
    size: 50,
    usesFilter: false,
    durationMs: 60 * 60 * 1000,
    lockedText: "60 menit, tanpa petunjuk",
  },
};

function ensureCanDoMarkup() {
  const styleId = "can-do-dynamic-styles";
  if (!document.querySelector(`#${styleId}`)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .can-do-view { display: none; }
      .can-do-view.is-visible { display: block; }
      .can-do-intro,
      .can-do-card {
        border: 1px solid var(--line, #d9d5ca);
        border-radius: 8px;
        background: var(--surface, #fffdf7);
      }
      .can-do-intro {
        margin-bottom: 16px;
        padding: 20px;
      }
      .can-do-intro h3,
      .can-do-intro p,
      .can-do-card h3,
      .can-do-card p {
        margin: 0;
      }
      .can-do-intro p,
      .can-do-card p {
        color: var(--muted, #667078);
        line-height: 1.5;
      }
      .can-do-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 14px;
      }
      .can-do-card {
        display: grid;
        gap: 12px;
        padding: 18px;
      }
      .can-do-card header {
        display: flex;
        justify-content: space-between;
        gap: 12px;
      }
      .can-do-count {
        align-self: start;
        white-space: nowrap;
        padding: 4px 9px;
        border-radius: 999px;
        background: var(--green-soft, #dff2ea);
        color: #0c4f3f;
        font-weight: 850;
      }
      .can-do-card button {
        justify-self: start;
        min-height: 38px;
        padding: 0 12px;
        border: 1px solid var(--line, #d9d5ca);
        border-radius: 8px;
        background: var(--surface-strong, #fff);
        font-weight: 850;
      }
    `;
    document.head.append(style);
  }

  const categoryFilter = document.querySelector("#categoryFilter");
  if (categoryFilter && !document.querySelector("#canDoFilter")) {
    const block = document.createElement("div");
    block.className = "control-block";
    block.innerHTML = `
      <label for="canDoFilter">Can-do</label>
      <select id="canDoFilter"></select>
    `;
    const categoryBlock = categoryFilter.closest(".control-block");
    if (categoryBlock) categoryBlock.after(block);
  }

  const modeTabs = document.querySelector(".mode-tabs");
  if (modeTabs && !document.querySelector('[data-view="cando"]')) {
    const button = document.createElement("button");
    button.className = "mode-tab";
    button.dataset.view = "cando";
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", "false");
    button.innerHTML = '<span aria-hidden="true">▣</span> Can-do別';
    const testTab = modeTabs.querySelector('[data-view="test"]');
    if (testTab) modeTabs.insertBefore(button, testTab);
    else modeTabs.append(button);
  }

  const workspace = document.querySelector(".workspace") || document.querySelector("main");
  if (workspace && !document.querySelector("#canDoView")) {
    const view = document.createElement("section");
    view.className = "view can-do-view";
    view.id = "canDoView";
    view.innerHTML = `
      <div class="can-do-intro">
        <h3>Can-do別学習</h3>
        <p>JFT Basic A2は生活場面ベースです。文法順だけでなく、買い物・交通・病院・役所・職場・住まい・食事・予約・道案内から練習できます。</p>
      </div>
      <div class="can-do-grid" id="canDoGrid"></div>
    `;
    workspace.append(view);
  }
}

ensureCanDoMarkup();

const els = {
  metricAnswered: document.querySelector("#metricAnswered"),
  metricAccuracy: document.querySelector("#metricAccuracy"),
  metricStreak: document.querySelector("#metricStreak"),
  metricReview: document.querySelector("#metricReview"),
  sectionFilter: document.querySelector("#sectionFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  canDoFilter: document.querySelector("#canDoFilter"),
  modeTabs: [...document.querySelectorAll(".mode-tab")],
  shuffleBtn: document.querySelector("#shuffleBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  sidebarResetBtn: document.querySelector("#sidebarResetBtn"),
  toolbarMeta: document.querySelector("#toolbarMeta"),
  viewTitle: document.querySelector("#viewTitle"),
  views: {
    practice: document.querySelector("#practiceView"),
    cando: document.querySelector("#canDoView"),
    test: document.querySelector("#practiceView"),
    mock: document.querySelector("#practiceView"),
    bank: document.querySelector("#bankView"),
    review: document.querySelector("#reviewView"),
  },
  questionSection: document.querySelector("#questionSection"),
  questionCategory: document.querySelector("#questionCategory"),
  questionNumber: document.querySelector("#questionNumber"),
  scenarioText: document.querySelector("#scenarioText"),
  dialogueBox: document.querySelector("#dialogueBox"),
  choicesBox: document.querySelector("#choicesBox"),
  feedbackBox: document.querySelector("#feedbackBox"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  patternLabel: document.querySelector("#patternLabel"),
  patternText: document.querySelector("#patternText"),
  meaningLabel: document.querySelector("#meaningLabel"),
  meaningText: document.querySelector("#meaningText"),
  progressFill: document.querySelector("#progressFill"),
  progressText: document.querySelector("#progressText"),
  searchInput: document.querySelector("#searchInput"),
  questionList: document.querySelector("#questionList"),
  reviewSummary: document.querySelector("#reviewSummary"),
  reviewList: document.querySelector("#reviewList"),
  canDoGrid: document.querySelector("#canDoGrid"),
};

const state = {
  view: "practice",
  index: 0,
  selected: null,
  search: "",
  testQuestionIds: [],
  testAnswers: {},
  choiceOrders: {},
  testFinished: false,
  testStartedAt: 0,
  testDurationMs: 0,
  progress: loadProgress(),
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // localStorage can be unavailable in some preview contexts.
  }
  return {
    answered: 0,
    correct: 0,
    streak: 0,
    attempts: {},
    mistakes: {},
  };
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch {
    // Progress is optional; the app still works without persistence.
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTextWithBlank(text) {
  return escapeHtml(text).replaceAll("[blank]", '<span class="blank">[ ]</span>');
}

function isTestMode(view = state.view) {
  return Boolean(TEST_CONFIGS[view]);
}

function shouldRevealAnswer() {
  return state.selected !== null || state.testFinished;
}

function choiceOrderFor(question) {
  if (isTestMode() && state.choiceOrders[question.id]) return state.choiceOrders[question.id];
  return question.choices.map((_, index) => index);
}

function currentQuestions() {
  if (isTestMode() && state.testQuestionIds.length) {
    return state.testQuestionIds
      .map((id) => questionBank.find((question) => question.id === id))
      .filter(Boolean);
  }

  const section = els.sectionFilter.value;
  const category = els.categoryFilter.value;
  const canDo = els.canDoFilter?.value || "all";
  return questionBank.filter((question) => {
    const matchesSection = section === "all" || question.section === section;
    const matchesCategory = category === "all" || question.category === category;
    const matchesCanDo = canDo === "all" || question.canDo === canDo;
    return matchesSection && matchesCategory && matchesCanDo;
  });
}

function filteredQuestionPool() {
  const section = els.sectionFilter.value;
  const category = els.categoryFilter.value;
  const canDo = els.canDoFilter?.value || "all";
  return questionBank.filter((question) => {
    const matchesSection = section === "all" || question.section === section;
    const matchesCategory = category === "all" || question.category === category;
    const matchesCanDo = canDo === "all" || question.canDo === canDo;
    return matchesSection && matchesCategory && matchesCanDo;
  });
}

function mockQuestionPool() {
  const selected = [];
  const selectedIds = new Set();
  const take = (pool, count) => {
    shuffled(pool)
      .filter((question) => !selectedIds.has(question.id))
      .slice(0, count)
      .forEach((question) => {
        selected.push(question);
        selectedIds.add(question.id);
      });
  };

  take(
    questionBank.filter((question) => question.section === "Vocabulary"),
    15,
  );
  take(
    questionBank.filter((question) => question.section === "Grammar" || question.section === "Expression"),
    25,
  );
  take(
    questionBank.filter((question) => question.section === "Reading"),
    10,
  );
  take(questionBank, TEST_CONFIGS.mock.size - selected.length);
  return shuffled(selected);
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function startTest(view = state.view) {
  const config = TEST_CONFIGS[view] || TEST_CONFIGS.test;
  const pool = config.usesFilter ? filteredQuestionPool() : mockQuestionPool();
  const selectedQuestions = shuffled(pool).slice(0, config.size);
  state.testQuestionIds = selectedQuestions.map((question) => question.id);
  state.testAnswers = {};
  state.choiceOrders = Object.fromEntries(
    selectedQuestions.map((question) => [
      question.id,
      shuffled(question.choices.map((_, choiceIndex) => choiceIndex)),
    ]),
  );
  state.testFinished = false;
  state.testStartedAt = Date.now();
  state.testDurationMs = config.durationMs;
  state.index = 0;
  state.selected = null;
}

function syncSelectedFromTest() {
  if (!isTestMode()) return;
  const question = currentQuestions()[state.index];
  state.selected = question ? (state.testAnswers[question.id] ?? null) : null;
}

function remainingMs() {
  if (!state.testDurationMs || !state.testStartedAt) return null;
  return Math.max(0, state.testDurationMs - (Date.now() - state.testStartedAt));
}

function formatTime(ms) {
  if (ms === null) return "";
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function finishTestIfExpired() {
  const left = remainingMs();
  if (isTestMode() && left === 0 && !state.testFinished) state.testFinished = true;
}

function renderCategoryOptions() {
  const section = els.sectionFilter.value;
  const canDo = els.canDoFilter?.value || "all";
  const current = els.categoryFilter.value || "all";
  const categories = [
    ...new Set(
      questionBank
        .filter(
          (question) =>
            (section === "all" || question.section === section) &&
            (canDo === "all" || question.canDo === canDo),
        )
        .map((question) => question.category),
    ),
  ].sort((a, b) => a.localeCompare(b, "ja"));

  els.categoryFilter.innerHTML = [
    '<option value="all">Semua kategori</option>',
    ...categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`),
  ].join("");
  els.categoryFilter.value = categories.includes(current) ? current : "all";
}

function renderCanDoOptions() {
  if (!els.canDoFilter) return;
  const current = els.canDoFilter.value || "all";
  els.canDoFilter.innerHTML = [
    '<option value="all">Semua Can-do</option>',
    ...CAN_DO_AREAS.map((area) => {
      const count = questionBank.filter((question) => question.canDo === area.id).length;
      return `<option value="${area.id}">${escapeHtml(area.labelJa)} / ${escapeHtml(area.labelId)} (${count})</option>`;
    }),
  ].join("");
  els.canDoFilter.value = CAN_DO_AREAS.some((area) => area.id === current) ? current : "all";
}

function renderStats() {
  const { answered, correct, streak, mistakes } = state.progress;
  const reviewCount = Object.values(mistakes).filter((count) => count > 0).length;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;

  els.metricAnswered.textContent = answered;
  els.metricAccuracy.textContent = `${accuracy}%`;
  els.metricStreak.textContent = streak;
  els.metricReview.textContent = reviewCount;
}

function renderPractice() {
  finishTestIfExpired();
  const questions = currentQuestions();
  if (!questions.length) {
    els.scenarioText.textContent = "Tidak ada soal pada filter ini.";
    els.dialogueBox.innerHTML = "";
    els.choicesBox.innerHTML = "";
    els.feedbackBox.hidden = true;
    return;
  }

  if (state.index >= questions.length) state.index = 0;
  syncSelectedFromTest();
  const question = questions[state.index];
  const progress = ((state.index + 1) / questions.length) * 100;
  const answered = state.selected !== null;
  const revealAnswer = shouldRevealAnswer();
  const showHints = revealAnswer;
  const showTestReview = isTestMode() && state.testFinished;

  els.questionSection.textContent = question.section;
  els.questionCategory.textContent = `${question.category} / ${canDoAreaFor(question).labelJa}`;
  els.questionNumber.textContent = `No. ${question.id}`;
  els.scenarioText.textContent = question.scenario;
  if (showHints || showTestReview) {
    els.patternLabel.textContent = "Pola";
    els.meaningLabel.textContent = "Makna";
    els.patternText.textContent = question.pattern;
    els.meaningText.textContent = question.meaning;
  } else if (isTestMode()) {
    const config = TEST_CONFIGS[state.view];
    els.patternLabel.textContent = config.title;
    els.meaningLabel.textContent = state.testDurationMs ? "Sisa waktu" : "Petunjuk";
    els.patternText.textContent = "Tidak ada petunjuk";
    els.meaningText.textContent = state.testDurationMs ? formatTime(remainingMs()) : config.lockedText;
  } else {
    els.patternLabel.textContent = "Petunjuk";
    els.meaningLabel.textContent = "Status";
    els.patternText.textContent = "Terkunci";
    els.meaningText.textContent = "Pilih jawaban dulu";
  }
  els.progressFill.style.width = `${progress}%`;
  els.progressText.textContent = `${state.index + 1} / ${questions.length}`;

  els.dialogueBox.innerHTML = question.dialogue
    .map(
      ([speaker, text]) => `
        <div class="dialogue-line">
          <div class="speaker">${escapeHtml(speaker)}</div>
          <div class="utterance">${renderTextWithBlank(text)}</div>
        </div>
      `,
    )
    .join("");

  els.choicesBox.innerHTML = choiceOrderFor(question)
    .map((originalChoiceIndex, displayIndex) => {
      const choice = question.choices[originalChoiceIndex];
      const isSelected = state.selected === originalChoiceIndex;
      const isCorrect = answered && revealAnswer && originalChoiceIndex === question.answer;
      const isWrong = answered && revealAnswer && isSelected && originalChoiceIndex !== question.answer;
      const statusText = isCorrect ? "Benar" : isWrong ? "Salah" : "";
      const className = [
        "choice-button",
        isSelected ? "is-selected" : "",
        isCorrect ? "is-correct" : "",
        isWrong ? "is-wrong" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <button class="${className}" type="button" data-choice="${originalChoiceIndex}">
          <span class="choice-index">${displayIndex + 1}</span>
          <span class="choice-text">${escapeHtml(choice)}</span>
          ${statusText ? `<span class="choice-status">${statusText}</span>` : ""}
        </button>
      `;
    })
    .join("");

  els.choicesBox.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.choice)));
  });

  renderFeedback(question);
  renderQuestionActions(questions.length);
}

function renderFeedback(question) {
  if (isTestMode() && state.testFinished) {
    const questions = currentQuestions();
    const correct = questions.filter((item) => state.testAnswers[item.id] === item.answer).length;
    els.feedbackBox.hidden = false;
    els.feedbackBox.className = "feedback correct";
    els.feedbackBox.innerHTML = `
      <strong>Hasil tes: ${correct} / ${questions.length}</strong>
      <span>Jawaban benar ditandai hijau. Tekan Acak soal atau buka mode tes lagi untuk mulai paket baru.</span>
    `;
    return;
  }

  if (state.selected === null) {
    els.feedbackBox.hidden = true;
    els.feedbackBox.className = "feedback";
    els.feedbackBox.innerHTML = "";
    return;
  }

  const isCorrect = state.selected === question.answer;
  els.feedbackBox.hidden = false;
  els.feedbackBox.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
  els.feedbackBox.innerHTML = `
    <strong>${isCorrect ? "Benar!" : `Salah. Jawaban benar: ${escapeHtml(question.choices[question.answer])}`}</strong>
    <span>${escapeHtml(question.explanation)}</span>
  `;
}

function renderQuestionActions(total) {
  const isLast = state.index === total - 1;
  els.prevBtn.style.visibility = isTestMode() && state.index === 0 ? "hidden" : "visible";

  if (isTestMode()) {
    els.nextBtn.innerHTML =
      isLast && state.selected !== null && !state.testFinished
        ? 'Selesai <span aria-hidden="true">✓</span>'
        : 'Berikutnya <span aria-hidden="true">›</span>';
    return;
  }

  els.nextBtn.innerHTML = 'Berikutnya <span aria-hidden="true">›</span>';
}

function chooseAnswer(choiceIndex) {
  if (state.selected !== null) return;

  const question = currentQuestions()[state.index];
  state.selected = choiceIndex;
  if (isTestMode()) state.testAnswers[question.id] = choiceIndex;
  state.progress.answered += 1;
  state.progress.attempts[question.id] = (state.progress.attempts[question.id] || 0) + 1;

  if (choiceIndex === question.answer) {
    state.progress.correct += 1;
    state.progress.streak += 1;
  } else {
    state.progress.streak = 0;
    state.progress.mistakes[question.id] = (state.progress.mistakes[question.id] || 0) + 1;
  }

  saveProgress();
  renderAll();
}

function moveQuestion(delta) {
  const questions = currentQuestions();
  if (!questions.length) return;

  if (isTestMode() && delta > 0 && state.index === questions.length - 1 && state.selected !== null) {
    state.testFinished = true;
    renderAll();
    return;
  }

  state.index = (state.index + delta + questions.length) % questions.length;
  state.selected = null;
  syncSelectedFromTest();
  renderAll();
}

function shuffleQuestion() {
  if (isTestMode()) {
    startTest(state.view);
    renderAll();
    return;
  }

  const questions = currentQuestions();
  if (!questions.length) return;
  state.index = Math.floor(Math.random() * questions.length);
  state.selected = null;
  renderAll();
}

function setView(view) {
  if (isTestMode(view)) startTest(view);
  state.view = view;
  state.selected = view === "practice" ? state.selected : null;
  els.modeTabs.forEach((tab) => {
    const isActive = tab.dataset.view === view;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  const visibleView = isTestMode(view) ? els.views.practice : els.views[view];
  [...new Set(Object.values(els.views))].filter(Boolean).forEach((element) => {
    element.classList.toggle("is-visible", element === visibleView);
  });
  els.viewTitle.textContent =
    view === "practice"
      ? "Latihan"
      : isTestMode(view)
        ? TEST_CONFIGS[view].title
        : view === "cando"
          ? "Can-do別学習"
          : view === "bank"
            ? "Bank Soal"
            : "Review";
  renderAll();
}

function renderCanDoView() {
  if (!els.canDoGrid) return;
  els.canDoGrid.innerHTML = CAN_DO_AREAS.map((area) => {
    const questions = questionBank.filter((question) => question.canDo === area.id);
    const categories = [...new Set(questions.map((question) => question.category))]
      .slice(0, 4)
      .join(" / ");
    return `
      <article class="can-do-card">
        <header>
          <div>
            <h3>${escapeHtml(area.labelJa)}</h3>
            <p>${escapeHtml(area.labelId)}</p>
          </div>
          <span class="can-do-count">${questions.length} soal</span>
        </header>
        <p>${escapeHtml(area.description)}</p>
        <p><strong>Topik:</strong> ${escapeHtml(categories || "-")}</p>
        <button type="button" data-cando-jump="${area.id}">Latih area ini</button>
      </article>
    `;
  }).join("");

  els.canDoGrid.querySelectorAll("[data-cando-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      if (els.canDoFilter) els.canDoFilter.value = button.dataset.candoJump;
      els.sectionFilter.value = "all";
      renderCategoryOptions();
      els.categoryFilter.value = "all";
      state.index = 0;
      state.selected = null;
      setView("practice");
    });
  });
}

function renderBank() {
  const term = state.search.trim().toLowerCase();
  const questions = currentQuestions().filter((question) => {
    const area = canDoAreaFor(question);
    const haystack = [
      question.id,
      question.section,
      question.category,
      area.labelJa,
      area.labelId,
      question.pattern,
      question.meaning,
      question.scenario,
      question.explanation,
      question.choices.join(" "),
      question.dialogue.map((line) => line.join(" ")).join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return !term || haystack.includes(term);
  });

  els.questionList.innerHTML = questions.map(renderListItem).join("");
  attachListButtons(els.questionList);
}

function renderReview() {
  const reviewQuestions = questionBank
    .filter((question) => (state.progress.mistakes[question.id] || 0) > 0)
    .sort((a, b) => (state.progress.mistakes[b.id] || 0) - (state.progress.mistakes[a.id] || 0));

  if (!reviewQuestions.length) {
    els.reviewSummary.innerHTML = `
      <h3>Belum ada soal review</h3>
      <p>Soal yang salah akan muncul di sini setelah latihan.</p>
    `;
    els.reviewList.innerHTML = "";
    return;
  }

  els.reviewSummary.innerHTML = `
    <h3>${reviewQuestions.length} soal perlu diulang</h3>
    <p>Prioritas tertinggi ditampilkan berdasarkan jumlah kesalahan.</p>
  `;
  els.reviewList.innerHTML = reviewQuestions.map(renderListItem).join("");
  attachListButtons(els.reviewList);
}

function renderListItem(question) {
  const mistakeCount = state.progress.mistakes[question.id] || 0;
  const area = canDoAreaFor(question);
  return `
    <article class="list-item">
      <header>
        <h3>No. ${question.id}</h3>
        <span class="tag">${escapeHtml(question.section)}</span>
      </header>
      <p>${escapeHtml(question.category)} / ${escapeHtml(area.labelJa)} - ${escapeHtml(question.meaning)}</p>
      <div class="list-answer">${escapeHtml(question.choices[question.answer])}</div>
      <p>${escapeHtml(question.pattern)}${mistakeCount ? ` / salah ${mistakeCount}x` : ""}</p>
      <button class="small-button" type="button" data-jump="${question.id}">Latih soal ini</button>
    </article>
  `;
}

function attachListButtons(container) {
  container.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.jump);
      const questions = currentQuestions();
      const filteredIndex = questions.findIndex((question) => question.id === id);
      if (filteredIndex === -1) {
        els.sectionFilter.value = "all";
        if (els.canDoFilter) els.canDoFilter.value = "all";
        renderCategoryOptions();
        els.categoryFilter.value = "all";
        state.index = questionBank.findIndex((question) => question.id === id);
      } else {
        state.index = filteredIndex;
      }
      state.selected = null;
      setView("practice");
    });
  });
}

function resetProgress() {
  const confirmed = window.confirm("Reset progres latihan?");
  if (!confirmed) return;
  state.progress = {
    answered: 0,
    correct: 0,
    streak: 0,
    attempts: {},
    mistakes: {},
  };
  state.selected = null;
  saveProgress();
  renderAll();
}

function renderAll() {
  finishTestIfExpired();
  const count = currentQuestions().length;
  els.toolbarMeta.textContent =
    state.view === "cando"
      ? `${CAN_DO_AREAS.length} Can-do area dari ${questionBank.length} soal`
      : isTestMode()
      ? `${count} soal acak dari ${questionBank.length} soal${state.testDurationMs ? ` | ${formatTime(remainingMs())}` : ""}`
      : `${count} soal aktif dari ${questionBank.length} soal`;
  renderStats();
  renderPractice();
  if (state.view === "cando") renderCanDoView();
  if (state.view === "bank") renderBank();
  if (state.view === "review") renderReview();
}

function bindEvents() {
  els.sectionFilter.addEventListener("change", () => {
    renderCategoryOptions();
    state.index = 0;
    state.selected = null;
    if (isTestMode()) startTest(state.view);
    renderAll();
  });

  els.categoryFilter.addEventListener("change", () => {
    state.index = 0;
    state.selected = null;
    if (isTestMode()) startTest(state.view);
    renderAll();
  });

  els.canDoFilter?.addEventListener("change", () => {
    renderCategoryOptions();
    state.index = 0;
    state.selected = null;
    if (isTestMode()) startTest(state.view);
    renderAll();
  });

  els.modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => setView(tab.dataset.view));
  });

  els.prevBtn.addEventListener("click", () => moveQuestion(-1));
  els.nextBtn.addEventListener("click", () => moveQuestion(1));
  els.shuffleBtn.addEventListener("click", shuffleQuestion);
  [els.resetBtn, els.sidebarResetBtn].filter(Boolean).forEach((button) => {
    button.addEventListener("click", resetProgress);
  });
  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderBank();
  });
}

renderCanDoOptions();
renderCategoryOptions();
bindEvents();
renderAll();

setInterval(() => {
  if (state.view === "mock" && state.testQuestionIds.length && !state.testFinished) renderAll();
}, 1000);

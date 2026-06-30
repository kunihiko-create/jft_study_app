const canDoAreas = [
  {
    id: "shopping",
    labelJa: "買い物",
    labelId: "Belanja",
    description: "Harga, ukuran, pembayaran, struk, dan permintaan barang di toko.",
  },
  {
    id: "transport",
    labelJa: "交通",
    labelId: "Transportasi",
    description: "Tiket, jadwal, waktu tempuh, keterlambatan, dan pindah kendaraan.",
  },
  {
    id: "hospital",
    labelJa: "病院",
    labelId: "Rumah sakit",
    description: "Gejala, obat, larangan, janji temu, dan ucapan setelah berobat.",
  },
  {
    id: "cityhall",
    labelJa: "役所",
    labelId: "Kantor pemerintah",
    description: "Formulir, kartu identitas, loket, nomor antrean, dan dokumen.",
  },
  {
    id: "workplace",
    labelJa: "職場",
    labelId: "Tempat kerja",
    description: "Salam kerja, alat kantor, rapat, izin pulang, dan laporan.",
  },
  {
    id: "housing",
    labelJa: "住まい",
    labelId: "Tempat tinggal",
    description: "Mencari kamar, sewa, fasilitas rusak, sampah, dan pindahan.",
  },
  {
    id: "food",
    labelJa: "食事",
    labelId: "Makan",
    description: "Restoran, pesanan, rekomendasi, makan di tempat, dan ucapan makan.",
  },
  {
    id: "reservation",
    labelJa: "予約",
    labelId: "Reservasi",
    description: "Memesan tempat, mengubah jadwal, membatalkan, dan memberi data.",
  },
  {
    id: "directions",
    labelJa: "道案内",
    labelId: "Petunjuk jalan",
    description: "Bertanya lokasi, arah, pintu keluar, lama perjalanan, dan rute.",
  },
];

const questionBank = [
  {
    id: 1,
    section: "Grammar",
    category: "有無",
    canDo: "shopping",
    scenario: "Pelanggan bertanya apakah ukuran yang diinginkan tersedia.",
    pattern: "Nはありますか",
    meaning: "menanyakan apakah barang tersedia",
    dialogue: [
      ["客", "すみません。このシャツのMサイズは [blank]。"],
      ["店員", "はい、こちらにあります。"],
    ],
    choices: ["いますか", "ありますか", "行きますか"],
    answer: "ありますか",
    explanation: "Barang memakai あります。Orang atau hewan memakai います。",
  },
  {
    id: 2,
    section: "Expression",
    category: "許可",
    canDo: "shopping",
    scenario: "Pelanggan ingin mencoba pakaian sebelum membeli.",
    pattern: "Vてもいいですか",
    meaning: "meminta izin melakukan sesuatu",
    dialogue: [
      ["客", "このコートを [blank]。"],
      ["店員", "はい、試着室はこちらです。"],
    ],
    choices: ["試着してもいいですか", "試着しています", "試着しました"],
    answer: "試着してもいいですか",
    explanation: "Meminta izin memakai pola て形 + もいいですか。",
  },
  {
    id: 3,
    section: "Expression",
    category: "値段",
    canDo: "shopping",
    scenario: "Pelanggan menanyakan harga barang.",
    pattern: "これはいくらですか",
    meaning: "menanyakan harga",
    dialogue: [
      ["客", "すみません。これは [blank]。"],
      ["店員", "1,200円です。"],
    ],
    choices: ["どこですか", "なんですか", "いくらですか"],
    answer: "いくらですか",
    explanation: "Harga ditanyakan dengan いくらですか。",
  },
  {
    id: 4,
    section: "Vocabulary",
    category: "支払い",
    canDo: "shopping",
    scenario: "Pelanggan memilih cara pembayaran.",
    pattern: "現金で払います",
    meaning: "membayar dengan tunai",
    dialogue: [
      ["店員", "お支払いはどうなさいますか。"],
      ["客", "[blank] 払います。"],
    ],
    choices: ["現金で", "現金に", "現金を"],
    answer: "現金で",
    explanation: "Alat atau cara memakai partikel で。",
  },
  {
    id: 5,
    section: "Expression",
    category: "不要",
    canDo: "shopping",
    scenario: "Pelanggan tidak membutuhkan kantong belanja.",
    pattern: "袋は要りません",
    meaning: "menolak kantong dengan sopan",
    dialogue: [
      ["店員", "袋はご利用ですか。"],
      ["客", "いいえ、袋は [blank]。"],
    ],
    choices: ["要りません", "ありません", "使いませんか"],
    answer: "要りません",
    explanation: "Saat menyatakan tidak perlu, gunakan 要りません。",
  },
  {
    id: 6,
    section: "Expression",
    category: "依頼",
    canDo: "shopping",
    scenario: "Pelanggan meminta struk setelah membayar.",
    pattern: "Nをください",
    meaning: "meminta sesuatu",
    dialogue: [
      ["客", "すみません。レシートを [blank]。"],
      ["店員", "はい、どうぞ。"],
    ],
    choices: ["ください", "あります", "します"],
    answer: "ください",
    explanation: "Untuk meminta benda, gunakan Nをください。",
  },
  {
    id: 7,
    section: "Expression",
    category: "比較",
    canDo: "shopping",
    scenario: "Pelanggan ingin barang yang lebih murah.",
    pattern: "もう少し安いもの",
    meaning: "barang yang sedikit lebih murah",
    dialogue: [
      ["客", "すみません。もう少し [blank] ものはありますか。"],
      ["店員", "はい、こちらはいかがですか。"],
    ],
    choices: ["安い", "安く", "安かった"],
    answer: "安い",
    explanation: "Sebelum もの, kata sifat i tetap bentuk kamus: 安いもの。",
  },
  {
    id: 8,
    section: "Grammar",
    category: "数量",
    canDo: "shopping",
    scenario: "Pelanggan membeli dua barang yang sama.",
    pattern: "Nを二つください",
    meaning: "meminta dua buah barang",
    dialogue: [
      ["客", "このお菓子を [blank] ください。"],
      ["店員", "はい、少々お待ちください。"],
    ],
    choices: ["二つ", "二人", "二枚"],
    answer: "二つ",
    explanation: "Benda umum dihitung dengan ひとつ、ふたつ、みっつ。",
  },
  {
    id: 9,
    section: "Expression",
    category: "所要時間",
    canDo: "transport",
    scenario: "Seseorang bertanya lama perjalanan ke stasiun.",
    pattern: "どのくらいかかりますか",
    meaning: "menanyakan lama waktu",
    dialogue: [
      ["客", "ここから駅まで [blank] かかりますか。"],
      ["係員", "歩いて10分ぐらいです。"],
    ],
    choices: ["どれ", "どのくらい", "なんじ"],
    answer: "どのくらい",
    explanation: "Lama waktu atau jumlah kira-kira ditanyakan dengan どのくらい。",
  },
  {
    id: 10,
    section: "Vocabulary",
    category: "切符",
    canDo: "transport",
    scenario: "Penumpang membeli tiket sekali jalan.",
    pattern: "片道の切符",
    meaning: "tiket sekali jalan",
    dialogue: [
      ["客", "大阪まで [blank] の切符をください。"],
      ["駅員", "はい、片道ですね。"],
    ],
    choices: ["片道", "往復", "全部"],
    answer: "片道",
    explanation: "Sekali jalan adalah 片道。Pulang pergi adalah 往復。",
  },
  {
    id: 11,
    section: "Vocabulary",
    category: "切符",
    canDo: "transport",
    scenario: "Penumpang membeli tiket pulang pergi.",
    pattern: "往復の切符",
    meaning: "tiket pulang pergi",
    dialogue: [
      ["客", "京都まで [blank] の切符をください。"],
      ["駅員", "はい、往復ですね。"],
    ],
    choices: ["片道", "往復", "入口"],
    answer: "往復",
    explanation: "Pulang pergi adalah 往復。",
  },
  {
    id: 12,
    section: "Expression",
    category: "時刻",
    canDo: "transport",
    scenario: "Penumpang menanyakan jam bus berikutnya.",
    pattern: "次のバスは何時ですか",
    meaning: "menanyakan jam kendaraan berikutnya",
    dialogue: [
      ["客", "すみません。次のバスは [blank]。"],
      ["係員", "午後3時10分です。"],
    ],
    choices: ["何時ですか", "何人ですか", "何枚ですか"],
    answer: "何時ですか",
    explanation: "Waktu jam ditanyakan dengan 何時ですか。",
  },
  {
    id: 13,
    section: "Grammar",
    category: "可能",
    canDo: "transport",
    scenario: "Seseorang bertanya apakah bisa pergi ke stasiun dengan berjalan kaki.",
    pattern: "歩いて行けますか",
    meaning: "menanyakan bisa pergi dengan berjalan",
    dialogue: [
      ["客", "駅まで歩いて [blank]。"],
      ["係員", "はい、行けますよ。"],
    ],
    choices: ["行けますか", "行きましたか", "行っていますか"],
    answer: "行けますか",
    explanation: "Kemampuan atau kemungkinan memakai bentuk potensial: 行けます。",
  },
  {
    id: 14,
    section: "Expression",
    category: "乗り換え",
    canDo: "transport",
    scenario: "Penumpang bertanya tempat pindah kereta.",
    pattern: "どこで乗り換えますか",
    meaning: "bertanya tempat transit",
    dialogue: [
      ["客", "新宿へ行きたいんですが、どこで [blank]。"],
      ["駅員", "池袋で乗り換えてください。"],
    ],
    choices: ["乗りますか", "乗り換えますか", "降りますか"],
    answer: "乗り換えますか",
    explanation: "Transit atau pindah kendaraan disebut 乗り換えます。",
  },
  {
    id: 15,
    section: "Grammar",
    category: "理由",
    canDo: "transport",
    scenario: "Pegawai menjelaskan kereta terlambat karena hujan deras.",
    pattern: "雨で電車が遅れています",
    meaning: "menyatakan sebab dengan で",
    dialogue: [
      ["駅員", "大雨 [blank]、電車が遅れています。"],
      ["客", "そうですか。"],
    ],
    choices: ["で", "に", "を"],
    answer: "で",
    explanation: "Sebab seperti hujan atau kecelakaan bisa dinyatakan dengan で。",
  },
  {
    id: 16,
    section: "Expression",
    category: "場所",
    canDo: "transport",
    scenario: "Penumpang mencari tempat naik taksi.",
    pattern: "タクシー乗り場はどこですか",
    meaning: "bertanya lokasi tempat naik taksi",
    dialogue: [
      ["客", "すみません。タクシー乗り場は [blank]。"],
      ["係員", "駅の南口にあります。"],
    ],
    choices: ["どこですか", "いつですか", "いくらですか"],
    answer: "どこですか",
    explanation: "Lokasi ditanyakan dengan どこですか。",
  },
  {
    id: 17,
    section: "Expression",
    category: "症状",
    canDo: "hospital",
    scenario: "Dokter menanyakan keadaan pasien.",
    pattern: "どうしましたか",
    meaning: "menanyakan masalah atau gejala",
    dialogue: [
      ["医者", "[blank]。"],
      ["患者", "頭が痛いです。"],
    ],
    choices: ["どうしましたか", "どうしますか", "どうですか"],
    answer: "どうしましたか",
    explanation: "Di klinik, dokter biasa bertanya どうしましたか。",
  },
  {
    id: 18,
    section: "Vocabulary",
    category: "症状",
    canDo: "hospital",
    scenario: "Pasien mengatakan ia demam.",
    pattern: "熱があります",
    meaning: "demam",
    dialogue: [
      ["医者", "熱はありますか。"],
      ["患者", "はい、少し [blank]。"],
    ],
    choices: ["熱があります", "熱をします", "熱に行きます"],
    answer: "熱があります",
    explanation: "Demam diungkapkan dengan 熱があります。",
  },
  {
    id: 19,
    section: "Expression",
    category: "助言",
    canDo: "hospital",
    scenario: "Dokter menyarankan pasien tidur lebih awal.",
    pattern: "早く寝てください",
    meaning: "meminta atau menyarankan tidur cepat",
    dialogue: [
      ["医者", "今日は早く [blank]。"],
      ["患者", "はい、わかりました。"],
    ],
    choices: ["寝てください", "寝ないでください", "寝ています"],
    answer: "寝てください",
    explanation: "Permintaan atau nasihat memakai て形 + ください。",
  },
  {
    id: 20,
    section: "Grammar",
    category: "時間表現",
    canDo: "hospital",
    scenario: "Dokter memberi petunjuk minum obat sebelum tidur.",
    pattern: "寝る前に薬を飲む",
    meaning: "minum obat sebelum tidur",
    dialogue: [
      ["医者", "寝る [blank] に、この薬を飲んでください。"],
      ["患者", "はい。"],
    ],
    choices: ["前", "後", "中"],
    answer: "前",
    explanation: "Sebelum melakukan sesuatu adalah V辞書形 + 前に。",
  },
  {
    id: 21,
    section: "Vocabulary",
    category: "受付",
    canDo: "hospital",
    scenario: "Petugas klinik meminta kartu asuransi kesehatan.",
    pattern: "保険証を見せる",
    meaning: "menunjukkan kartu asuransi kesehatan",
    dialogue: [
      ["受付", "保険証を [blank]。"],
      ["患者", "はい、どうぞ。"],
    ],
    choices: ["見せてください", "見てください", "聞いてください"],
    answer: "見せてください",
    explanation: "Meminta seseorang menunjukkan sesuatu: 見せてください。",
  },
  {
    id: 22,
    section: "Expression",
    category: "予約確認",
    canDo: "hospital",
    scenario: "Petugas klinik menanyakan apakah pasien sudah reservasi.",
    pattern: "予約していますか",
    meaning: "menanyakan apakah sudah reservasi",
    dialogue: [
      ["受付", "今日は [blank]。"],
      ["患者", "はい、10時に予約しています。"],
    ],
    choices: ["予約していますか", "予約しましたか", "予約しますか"],
    answer: "予約していますか",
    explanation: "Status reservasi sekarang dinyatakan dengan 予約しています。",
  },
  {
    id: 23,
    section: "Expression",
    category: "挨拶",
    canDo: "hospital",
    scenario: "Seseorang mengucapkan salam kepada orang yang sakit.",
    pattern: "お大事に",
    meaning: "semoga lekas sembuh",
    dialogue: [
      ["患者", "ありがとうございました。"],
      ["受付", "[blank]。"],
    ],
    choices: ["お大事に", "いただきます", "いらっしゃいませ"],
    answer: "お大事に",
    explanation: "Ucapan kepada orang sakit adalah お大事に。",
  },
  {
    id: 24,
    section: "Grammar",
    category: "禁止",
    canDo: "hospital",
    scenario: "Dokter melarang pasien mandi hari ini.",
    pattern: "Vないでください",
    meaning: "meminta agar tidak melakukan sesuatu",
    dialogue: [
      ["医者", "今日はお風呂に [blank]。"],
      ["患者", "はい、わかりました。"],
    ],
    choices: ["入らないでください", "入ってください", "入りました"],
    answer: "入らないでください",
    explanation: "Larangan sopan memakai ない形 + でください。",
  },
  {
    id: 25,
    section: "Expression",
    category: "手続き",
    canDo: "cityhall",
    scenario: "Penduduk ingin mengubah alamat di kantor pemerintah.",
    pattern: "住所を変えたいです",
    meaning: "ingin mengubah alamat",
    dialogue: [
      ["住民", "すみません。住所を [blank]。"],
      ["職員", "では、この用紙に書いてください。"],
    ],
    choices: ["変えたいです", "変えました", "変えています"],
    answer: "変えたいです",
    explanation: "Keinginan dinyatakan dengan ます形 + たいです。",
  },
  {
    id: 26,
    section: "Vocabulary",
    category: "書類",
    canDo: "cityhall",
    scenario: "Petugas meminta kartu izin tinggal.",
    pattern: "在留カード",
    meaning: "kartu izin tinggal",
    dialogue: [
      ["職員", "[blank] を見せてください。"],
      ["住民", "はい、どうぞ。"],
    ],
    choices: ["在留カード", "診察券", "定期券"],
    answer: "在留カード",
    explanation: "Kartu izin tinggal disebut 在留カード。",
  },
  {
    id: 27,
    section: "Grammar",
    category: "依頼",
    canDo: "cityhall",
    scenario: "Petugas meminta pengunjung menulis nama pada formulir.",
    pattern: "この紙に名前を書いてください",
    meaning: "tolong tulis nama di kertas ini",
    dialogue: [
      ["職員", "この紙 [blank] 名前を書いてください。"],
      ["住民", "はい。"],
    ],
    choices: ["に", "で", "を"],
    answer: "に",
    explanation: "Tempat menulis nama pada kertas ditandai dengan に。",
  },
  {
    id: 28,
    section: "Vocabulary",
    category: "受付",
    canDo: "cityhall",
    scenario: "Pengunjung perlu mengambil nomor antrean.",
    pattern: "番号札を取る",
    meaning: "mengambil nomor antrean",
    dialogue: [
      ["職員", "まず、番号札を [blank]。"],
      ["住民", "わかりました。"],
    ],
    choices: ["取ってください", "置いてください", "払ってください"],
    answer: "取ってください",
    explanation: "Mengambil nomor antrean: 番号札を取ります。",
  },
  {
    id: 29,
    section: "Expression",
    category: "窓口",
    canDo: "cityhall",
    scenario: "Petugas mengarahkan warga ke loket yang tepat.",
    pattern: "こちらの窓口へ行ってください",
    meaning: "silakan pergi ke loket ini",
    dialogue: [
      ["職員", "住民票は、こちらの窓口 [blank] 行ってください。"],
      ["住民", "ありがとうございます。"],
    ],
    choices: ["へ", "を", "で"],
    answer: "へ",
    explanation: "Arah tujuan dapat memakai へ。",
  },
  {
    id: 30,
    section: "Expression",
    category: "書類",
    canDo: "cityhall",
    scenario: "Warga bertanya di mana mendapatkan formulir.",
    pattern: "申請書はどこでもらえますか",
    meaning: "bertanya tempat mendapat formulir",
    dialogue: [
      ["住民", "申請書はどこで [blank]。"],
      ["職員", "受付でもらえます。"],
    ],
    choices: ["もらえますか", "もらいましたか", "もっていますか"],
    answer: "もらえますか",
    explanation: "Kemungkinan mendapat sesuatu memakai もらえます。",
  },
  {
    id: 31,
    section: "Grammar",
    category: "期限",
    canDo: "cityhall",
    scenario: "Petugas menjelaskan batas waktu penyerahan dokumen.",
    pattern: "来週までに出してください",
    meaning: "serahkan paling lambat minggu depan",
    dialogue: [
      ["職員", "この書類は来週 [blank] 出してください。"],
      ["住民", "はい、わかりました。"],
    ],
    choices: ["までに", "まで", "から"],
    answer: "までに",
    explanation: "Batas akhir tindakan memakai までに。",
  },
  {
    id: 32,
    section: "Vocabulary",
    category: "書類",
    canDo: "cityhall",
    scenario: "Petugas meminta satu lembar salinan dokumen.",
    pattern: "コピーを一枚取る",
    meaning: "membuat satu lembar salinan",
    dialogue: [
      ["職員", "このページのコピーを一枚 [blank]。"],
      ["住民", "はい。"],
    ],
    choices: ["取ってください", "食べてください", "乗ってください"],
    answer: "取ってください",
    explanation: "Membuat salinan sering dikatakan コピーを取ります。",
  },
  {
    id: 33,
    section: "Expression",
    category: "自己紹介",
    canDo: "workplace",
    scenario: "Pegawai baru memperkenalkan diri di kantor.",
    pattern: "よろしくお願いします",
    meaning: "mohon kerja samanya",
    dialogue: [
      ["社員", "はじめまして。山田です。"],
      ["同僚", "こちらこそ、[blank]。"],
    ],
    choices: ["よろしくお願いします", "ごちそうさまでした", "お大事に"],
    answer: "よろしくお願いします",
    explanation: "Saat perkenalan kerja, gunakan よろしくお願いします。",
  },
  {
    id: 34,
    section: "Grammar",
    category: "手順",
    canDo: "workplace",
    scenario: "Rekan kerja menjelaskan cara memakai mesin fotokopi.",
    pattern: "ボタンを押すと始まります",
    meaning: "kalau menekan tombol, proses mulai",
    dialogue: [
      ["社員", "このスタートボタンを [blank]、コピーが始まります。"],
      ["同僚", "ありがとうございます。"],
    ],
    choices: ["押すと", "押しても", "押さないで"],
    answer: "押すと",
    explanation: "Untuk akibat yang biasa terjadi pada mesin, pola と cocok。",
  },
  {
    id: 35,
    section: "Grammar",
    category: "理由",
    canDo: "workplace",
    scenario: "Pegawai terlambat karena kecelakaan.",
    pattern: "事故で遅れました",
    meaning: "terlambat karena kecelakaan",
    dialogue: [
      ["社員", "遅れて、すみませんでした。"],
      ["上司", "どうしたんですか。"],
      ["社員", "途中で事故があって、電車が [blank]。"],
    ],
    choices: ["遅れました", "遅れます", "遅れたいです"],
    answer: "遅れました",
    explanation: "Kejadian yang sudah terjadi memakai bentuk lampau 遅れました。",
  },
  {
    id: 36,
    section: "Expression",
    category: "時間",
    canDo: "workplace",
    scenario: "Pegawai bertanya jam mulai rapat.",
    pattern: "何時からですか",
    meaning: "mulai jam berapa",
    dialogue: [
      ["社員", "今日の会議は [blank]。"],
      ["同僚", "3時からです。"],
    ],
    choices: ["何時からですか", "何人ですか", "何枚ですか"],
    answer: "何時からですか",
    explanation: "Jam mulai ditanyakan dengan 何時からですか。",
  },
  {
    id: 37,
    section: "Expression",
    category: "退勤",
    canDo: "workplace",
    scenario: "Pegawai pulang lebih dulu dari kantor.",
    pattern: "お先に失礼します",
    meaning: "izin pulang lebih dulu",
    dialogue: [
      ["社員", "[blank]。"],
      ["同僚", "お疲れさまでした。"],
    ],
    choices: ["お先に失礼します", "いただきます", "いらっしゃいませ"],
    answer: "お先に失礼します",
    explanation: "Saat pulang lebih dulu dari kantor, ucapkan お先に失礼します。",
  },
  {
    id: 38,
    section: "Expression",
    category: "挨拶",
    canDo: "workplace",
    scenario: "Rekan kerja mengucapkan salam setelah pekerjaan selesai.",
    pattern: "お疲れさまでした",
    meaning: "terima kasih atas kerja kerasnya",
    dialogue: [
      ["社員", "今日はこれで終わります。"],
      ["同僚", "[blank]。"],
    ],
    choices: ["お疲れさまでした", "お大事に", "ごめんください"],
    answer: "お疲れさまでした",
    explanation: "Ucapan umum di tempat kerja setelah bekerja adalah お疲れさまでした。",
  },
  {
    id: 39,
    section: "Expression",
    category: "依頼",
    canDo: "workplace",
    scenario: "Pegawai meminta diajari cara memakai alat kerja.",
    pattern: "教えてもらえませんか",
    meaning: "bisakah saya diajari",
    dialogue: [
      ["社員", "この機械の使い方を [blank]。"],
      ["同僚", "いいですよ。"],
    ],
    choices: ["教えてもらえませんか", "教えましたか", "教えません"],
    answer: "教えてもらえませんか",
    explanation: "Permintaan sopan memakai てもらえませんか。",
  },
  {
    id: 40,
    section: "Expression",
    category: "連絡",
    canDo: "workplace",
    scenario: "Atasan meminta pegawai mengirim laporan melalui email.",
    pattern: "メールで送ってください",
    meaning: "tolong kirim melalui email",
    dialogue: [
      ["上司", "このレポートをメール [blank] 送ってください。"],
      ["社員", "はい、わかりました。"],
    ],
    choices: ["で", "に", "を"],
    answer: "で",
    explanation: "Cara atau media pengiriman memakai で。",
  },
  {
    id: 41,
    section: "Expression",
    category: "部屋探し",
    canDo: "housing",
    scenario: "Seseorang sedang mencari kamar untuk ditinggali.",
    pattern: "部屋を探しています",
    meaning: "sedang mencari kamar",
    dialogue: [
      ["客", "すみません。部屋を [blank]。"],
      ["店員", "どんな部屋がいいですか。"],
    ],
    choices: ["探しています", "探しました", "探しますか"],
    answer: "探しています",
    explanation: "Keadaan sedang mencari dinyatakan dengan ています。",
  },
  {
    id: 42,
    section: "Vocabulary",
    category: "家賃",
    canDo: "housing",
    scenario: "Calon penyewa menanyakan biaya sewa bulanan.",
    pattern: "家賃はいくらですか",
    meaning: "berapa biaya sewa",
    dialogue: [
      ["客", "この部屋の家賃は [blank]。"],
      ["店員", "月7万円です。"],
    ],
    choices: ["いくらですか", "いつですか", "どこですか"],
    answer: "いくらですか",
    explanation: "Biaya ditanyakan dengan いくらですか。",
  },
  {
    id: 43,
    section: "Grammar",
    category: "比較",
    canDo: "housing",
    scenario: "Calon penyewa bertanya apakah kamar dekat dari stasiun.",
    pattern: "駅から近いですか",
    meaning: "apakah dekat dari stasiun",
    dialogue: [
      ["客", "このアパートは駅 [blank] 近いですか。"],
      ["店員", "はい、歩いて5分です。"],
    ],
    choices: ["から", "まで", "を"],
    answer: "から",
    explanation: "Titik awal jarak memakai から。",
  },
  {
    id: 44,
    section: "Vocabulary",
    category: "故障",
    canDo: "housing",
    scenario: "Penghuni melapor bahwa AC rusak.",
    pattern: "エアコンが壊れています",
    meaning: "AC sedang rusak",
    dialogue: [
      ["住人", "すみません。エアコンが [blank]。"],
      ["管理人", "すぐ確認します。"],
    ],
    choices: ["壊れています", "壊します", "壊れたいです"],
    answer: "壊れています",
    explanation: "Keadaan rusak dinyatakan dengan 壊れています。",
  },
  {
    id: 45,
    section: "Expression",
    category: "トラブル",
    canDo: "housing",
    scenario: "Penghuni melapor air tidak keluar.",
    pattern: "水が出ません",
    meaning: "air tidak keluar",
    dialogue: [
      ["住人", "台所の水が [blank]。"],
      ["管理人", "それは困りましたね。"],
    ],
    choices: ["出ません", "出ます", "出ました"],
    answer: "出ません",
    explanation: "Tidak keluar adalah 出ません。",
  },
  {
    id: 46,
    section: "Expression",
    category: "ごみ",
    canDo: "housing",
    scenario: "Penghuni baru bertanya hari membuang sampah.",
    pattern: "ごみはいつ出しますか",
    meaning: "kapan membuang sampah",
    dialogue: [
      ["住人", "燃えるごみはいつ [blank]。"],
      ["隣人", "月曜日と木曜日です。"],
    ],
    choices: ["出しますか", "出しましたか", "出ていますか"],
    answer: "出しますか",
    explanation: "Menanyakan jadwal kebiasaan memakai bentuk sekarang: 出しますか。",
  },
  {
    id: 47,
    section: "Vocabulary",
    category: "引っ越し",
    canDo: "housing",
    scenario: "Seseorang menceritakan rencana pindahan bulan depan.",
    pattern: "来月引っ越します",
    meaning: "akan pindah bulan depan",
    dialogue: [
      ["友人", "いつ引っ越しますか。"],
      ["住人", "[blank] 引っ越します。"],
    ],
    choices: ["来月", "昨日", "去年"],
    answer: "来月",
    explanation: "Rencana masa depan cocok dengan 来月。",
  },
  {
    id: 48,
    section: "Expression",
    category: "相談",
    canDo: "housing",
    scenario: "Calon penyewa bertanya apakah boleh tinggal bersama keluarga.",
    pattern: "家族と住んでもいいですか",
    meaning: "bolehkah tinggal bersama keluarga",
    dialogue: [
      ["客", "この部屋に家族と [blank]。"],
      ["店員", "はい、大丈夫です。"],
    ],
    choices: ["住んでもいいですか", "住んでいます", "住みました"],
    answer: "住んでもいいですか",
    explanation: "Meminta izin memakai て形 + もいいですか。",
  },
  {
    id: 49,
    section: "Expression",
    category: "入店",
    canDo: "food",
    scenario: "Pelayan restoran menanyakan jumlah orang.",
    pattern: "何名様ですか",
    meaning: "berapa orang",
    dialogue: [
      ["店員", "いらっしゃいませ。お客様、[blank]。"],
      ["客", "2人です。"],
    ],
    choices: ["何名様ですか", "いくらですか", "何時ですか"],
    answer: "何名様ですか",
    explanation: "Di restoran, jumlah tamu ditanya dengan 何名様ですか。",
  },
  {
    id: 50,
    section: "Expression",
    category: "注文",
    canDo: "food",
    scenario: "Pelanggan bertanya rekomendasi makanan.",
    pattern: "おすすめは何ですか",
    meaning: "apa rekomendasinya",
    dialogue: [
      ["客", "すみません。おすすめは [blank]。"],
      ["店員", "てんぷら定食です。"],
    ],
    choices: ["何ですか", "どこですか", "いつですか"],
    answer: "何ですか",
    explanation: "Menanyakan isi rekomendasi memakai 何ですか。",
  },
  {
    id: 51,
    section: "Grammar",
    category: "感想",
    canDo: "food",
    scenario: "Pelanggan melihat menu dan berkata makanan tampak enak.",
    pattern: "おいしそうです",
    meaning: "kelihatannya enak",
    dialogue: [
      ["客", "このてんぷら定食、[blank]。"],
      ["友人", "じゃ、これにしましょう。"],
    ],
    choices: ["おいしそうです", "おいしいでした", "おいしくないですか"],
    answer: "おいしそうです",
    explanation: "Kesan dari tampilan memakai そうです: おいしそうです。",
  },
  {
    id: 52,
    section: "Expression",
    category: "注文",
    canDo: "food",
    scenario: "Pelanggan memesan makanan dari menu.",
    pattern: "これをください",
    meaning: "tolong beri yang ini",
    dialogue: [
      ["客", "じゃ、これを [blank]。"],
      ["店員", "かしこまりました。"],
    ],
    choices: ["ください", "あります", "います"],
    answer: "ください",
    explanation: "Memesan benda atau makanan bisa memakai これをください。",
  },
  {
    id: 53,
    section: "Vocabulary",
    category: "注文",
    canDo: "food",
    scenario: "Pelanggan ingin membawa makanan pulang.",
    pattern: "持ち帰りにします",
    meaning: "untuk dibawa pulang",
    dialogue: [
      ["店員", "店内でお召し上がりですか。"],
      ["客", "いいえ、[blank] にします。"],
    ],
    choices: ["持ち帰り", "予約", "支払い"],
    answer: "持ち帰り",
    explanation: "Bawa pulang disebut 持ち帰り。",
  },
  {
    id: 54,
    section: "Expression",
    category: "注文",
    canDo: "food",
    scenario: "Pelanggan meminta menu terlebih dahulu.",
    pattern: "メニューを見せてください",
    meaning: "tolong perlihatkan menu",
    dialogue: [
      ["客", "すみません。メニューを [blank]。"],
      ["店員", "はい、どうぞ。"],
    ],
    choices: ["見せてください", "見ます", "見ないでください"],
    answer: "見せてください",
    explanation: "Meminta diperlihatkan sesuatu memakai 見せてください。",
  },
  {
    id: 55,
    section: "Expression",
    category: "食事挨拶",
    canDo: "food",
    scenario: "Seseorang mengucapkan salam sebelum mulai makan.",
    pattern: "いただきます",
    meaning: "ucapan sebelum makan",
    dialogue: [
      ["友人", "料理が来ましたね。"],
      ["客", "[blank]。"],
    ],
    choices: ["いただきます", "ごちそうさまでした", "お疲れさまでした"],
    answer: "いただきます",
    explanation: "Sebelum makan ucapkan いただきます。",
  },
  {
    id: 56,
    section: "Expression",
    category: "食事挨拶",
    canDo: "food",
    scenario: "Setelah makan di rumah teman.",
    pattern: "ごちそうさまでした",
    meaning: "terima kasih atas makanannya",
    dialogue: [
      ["A", "今日はたくさん食べましたね。"],
      ["B", "はい、とてもおいしかったです。[blank]。"],
    ],
    choices: ["ごちそうさまでした", "ごめんください", "お大事に"],
    answer: "ごちそうさまでした",
    explanation: "Setelah makan, ucapkan ごちそうさまでした。",
  },
  {
    id: 57,
    section: "Expression",
    category: "予約",
    canDo: "reservation",
    scenario: "Pelanggan ingin membuat reservasi pada hari Jumat.",
    pattern: "金曜日に予約したいです",
    meaning: "ingin reservasi hari Jumat",
    dialogue: [
      ["客", "金曜日に予約 [blank]。"],
      ["店員", "何時がよろしいですか。"],
    ],
    choices: ["したいです", "しています", "しました"],
    answer: "したいです",
    explanation: "Keinginan memakai ます形 + たいです。",
  },
  {
    id: 58,
    section: "Expression",
    category: "時間",
    canDo: "reservation",
    scenario: "Petugas menanyakan jam reservasi yang diinginkan.",
    pattern: "何時がよろしいですか",
    meaning: "jam berapa yang baik",
    dialogue: [
      ["店員", "[blank] がよろしいですか。"],
      ["客", "午後7時でお願いします。"],
    ],
    choices: ["何時", "何人", "何枚"],
    answer: "何時",
    explanation: "Untuk jam, gunakan 何時。",
  },
  {
    id: 59,
    section: "Expression",
    category: "名前",
    canDo: "reservation",
    scenario: "Pelanggan menyebut nama untuk reservasi.",
    pattern: "田中で予約しています",
    meaning: "reservasi atas nama Tanaka",
    dialogue: [
      ["店員", "お名前をお願いします。"],
      ["客", "田中 [blank] 予約しています。"],
    ],
    choices: ["で", "に", "を"],
    answer: "で",
    explanation: "Nama yang dipakai untuk reservasi dinyatakan dengan で。",
  },
  {
    id: 60,
    section: "Expression",
    category: "連絡先",
    canDo: "reservation",
    scenario: "Petugas meminta nomor telepon.",
    pattern: "電話番号を教えてください",
    meaning: "tolong beri tahu nomor telepon",
    dialogue: [
      ["店員", "電話番号を [blank]。"],
      ["客", "はい、090...です。"],
    ],
    choices: ["教えてください", "覚えてください", "読んでください"],
    answer: "教えてください",
    explanation: "Meminta informasi memakai 教えてください。",
  },
  {
    id: 61,
    section: "Expression",
    category: "キャンセル",
    canDo: "reservation",
    scenario: "Pelanggan ingin membatalkan reservasi.",
    pattern: "予約をキャンセルしたいです",
    meaning: "ingin membatalkan reservasi",
    dialogue: [
      ["客", "すみません。予約を [blank]。"],
      ["店員", "かしこまりました。"],
    ],
    choices: ["キャンセルしたいです", "キャンセルしています", "キャンセルでした"],
    answer: "キャンセルしたいです",
    explanation: "Keinginan membatalkan memakai したいです。",
  },
  {
    id: 62,
    section: "Expression",
    category: "変更",
    canDo: "reservation",
    scenario: "Pelanggan ingin mengubah tanggal reservasi.",
    pattern: "日にちを変えたいです",
    meaning: "ingin mengubah tanggal",
    dialogue: [
      ["客", "予約の日にちを [blank]。"],
      ["店員", "いつに変更しますか。"],
    ],
    choices: ["変えたいです", "変えません", "変えましたか"],
    answer: "変えたいです",
    explanation: "Keinginan dinyatakan dengan たいです。",
  },
  {
    id: 63,
    section: "Expression",
    category: "空席",
    canDo: "reservation",
    scenario: "Pelanggan bertanya apakah masih ada tempat kosong.",
    pattern: "空いていますか",
    meaning: "apakah tersedia atau kosong",
    dialogue: [
      ["客", "今夜、2人ですが、席は [blank]。"],
      ["店員", "少々お待ちください。"],
    ],
    choices: ["空いていますか", "開けていますか", "空きましたか"],
    answer: "空いていますか",
    explanation: "Ketersediaan tempat sekarang: 空いていますか。",
  },
  {
    id: 64,
    section: "Vocabulary",
    category: "空席",
    canDo: "reservation",
    scenario: "Petugas mengatakan restoran penuh.",
    pattern: "満席です",
    meaning: "penuh",
    dialogue: [
      ["店員", "申し訳ありません。ただいま [blank]。"],
      ["客", "そうですか。"],
    ],
    choices: ["満席です", "無料です", "便利です"],
    answer: "満席です",
    explanation: "Tempat penuh disebut 満席。",
  },
  {
    id: 65,
    section: "Expression",
    category: "場所",
    canDo: "directions",
    scenario: "Seseorang bertanya lokasi stasiun.",
    pattern: "駅はどこですか",
    meaning: "di mana stasiun",
    dialogue: [
      ["人", "すみません。駅は [blank]。"],
      ["係員", "この道をまっすぐ行ってください。"],
    ],
    choices: ["どこですか", "何時ですか", "いくらですか"],
    answer: "どこですか",
    explanation: "Lokasi ditanyakan dengan どこですか。",
  },
  {
    id: 66,
    section: "Expression",
    category: "方向",
    canDo: "directions",
    scenario: "Petugas memberi instruksi jalan lurus.",
    pattern: "まっすぐ行ってください",
    meaning: "silakan jalan lurus",
    dialogue: [
      ["係員", "この道を [blank] 行ってください。"],
      ["人", "ありがとうございます。"],
    ],
    choices: ["まっすぐ", "右に", "左に"],
    answer: "まっすぐ",
    explanation: "Jalan lurus adalah まっすぐ。",
  },
  {
    id: 67,
    section: "Expression",
    category: "方向",
    canDo: "directions",
    scenario: "Petugas meminta orang belok kanan.",
    pattern: "右に曲がってください",
    meaning: "belok kanan",
    dialogue: [
      ["係員", "信号で [blank] 曲がってください。"],
      ["人", "はい。"],
    ],
    choices: ["右に", "上に", "前に"],
    answer: "右に",
    explanation: "Belok kanan adalah 右に曲がります。",
  },
  {
    id: 68,
    section: "Vocabulary",
    category: "道",
    canDo: "directions",
    scenario: "Seseorang diberi arahan untuk menyeberangi persimpangan.",
    pattern: "交差点を渡る",
    meaning: "menyeberangi persimpangan",
    dialogue: [
      ["係員", "この交差点を [blank]。"],
      ["人", "わかりました。"],
    ],
    choices: ["渡ってください", "待ってください", "曲がってください"],
    answer: "渡ってください",
    explanation: "Menyeberang jalan atau persimpangan adalah 渡ります。",
  },
  {
    id: 69,
    section: "Expression",
    category: "所要時間",
    canDo: "directions",
    scenario: "Seseorang bertanya lama berjalan ke kantor pos.",
    pattern: "どのくらいかかりますか",
    meaning: "berapa lama",
    dialogue: [
      ["人", "ここから郵便局まで [blank] かかりますか。"],
      ["係員", "歩いて15分ぐらいです。"],
    ],
    choices: ["どのくらい", "どんな", "どちら"],
    answer: "どのくらい",
    explanation: "Lama waktu ditanyakan dengan どのくらい。",
  },
  {
    id: 70,
    section: "Grammar",
    category: "失敗",
    canDo: "directions",
    scenario: "Seseorang tersesat walaupun melihat peta.",
    pattern: "道を間違えてしまいました",
    meaning: "terlanjur salah jalan",
    dialogue: [
      ["人", "地図を見ながら行きましたが、道を [blank]。"],
      ["友人", "大変でしたね。"],
    ],
    choices: ["間違えてしまいました", "間違えます", "間違えたいです"],
    answer: "間違えてしまいました",
    explanation: "Untuk kesalahan yang disesalkan, pola てしまいました cocok。",
  },
  {
    id: 71,
    section: "Vocabulary",
    category: "駅",
    canDo: "directions",
    scenario: "Petugas menjelaskan pintu keluar stasiun.",
    pattern: "東口を出る",
    meaning: "keluar dari pintu timur",
    dialogue: [
      ["係員", "駅の [blank] を出てください。"],
      ["人", "東口ですね。ありがとうございます。"],
    ],
    choices: ["東口", "会議室", "診察室"],
    answer: "東口",
    explanation: "Pintu keluar timur stasiun adalah 東口。",
  },
  {
    id: 72,
    section: "Expression",
    category: "店を探す",
    canDo: "directions",
    scenario: "Seseorang bertanya apakah ada minimarket di dekat sini.",
    pattern: "この近くにありますか",
    meaning: "apakah ada di dekat sini",
    dialogue: [
      ["人", "この近くにコンビニは [blank]。"],
      ["係員", "はい、角を右に曲がるとあります。"],
    ],
    choices: ["ありますか", "いますか", "買いますか"],
    answer: "ありますか",
    explanation: "Toko atau benda memakai あります。",
  },
];

const STORAGE_KEY = "jft-basic-a2-cando-progress-v1";
const canDoById = Object.fromEntries(canDoAreas.map((area) => [area.id, area]));

const els = {
  metricAnswered: document.getElementById("metricAnswered"),
  metricAccuracy: document.getElementById("metricAccuracy"),
  metricStreak: document.getElementById("metricStreak"),
  metricReview: document.getElementById("metricReview"),
  sectionFilter: document.getElementById("sectionFilter"),
  categoryFilter: document.getElementById("categoryFilter"),
  canDoFilter: document.getElementById("canDoFilter"),
  modeTabs: Array.from(document.querySelectorAll(".mode-tab")),
  sidebarResetBtn: document.getElementById("sidebarResetBtn"),
  toolbarMeta: document.getElementById("toolbarMeta"),
  viewTitle: document.getElementById("viewTitle"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  resetBtn: document.getElementById("resetBtn"),
  views: {
    practice: document.getElementById("practiceView"),
    cando: document.getElementById("candoView"),
    test: document.getElementById("practiceView"),
    mock: document.getElementById("practiceView"),
    bank: document.getElementById("bankView"),
    review: document.getElementById("reviewView"),
  },
  questionSection: document.getElementById("questionSection"),
  questionCategory: document.getElementById("questionCategory"),
  questionCanDo: document.getElementById("questionCanDo"),
  questionNumber: document.getElementById("questionNumber"),
  scenarioText: document.getElementById("scenarioText"),
  dialogueBox: document.getElementById("dialogueBox"),
  choicesBox: document.getElementById("choicesBox"),
  feedbackBox: document.getElementById("feedbackBox"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  patternLabel: document.getElementById("patternLabel"),
  patternText: document.getElementById("patternText"),
  meaningLabel: document.getElementById("meaningLabel"),
  meaningText: document.getElementById("meaningText"),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  canDoGrid: document.getElementById("canDoGrid"),
  searchInput: document.getElementById("searchInput"),
  questionList: document.getElementById("questionList"),
  reviewSummary: document.getElementById("reviewSummary"),
  reviewList: document.getElementById("reviewList"),
};

const state = {
  view: "practice",
  index: 0,
  practiceAnswers: {},
  practiceOrder: [],
  session: null,
  search: "",
  progress: loadProgress(),
};

function loadProgress() {
  const fallback = {
    totalAnswered: 0,
    totalCorrect: 0,
    streak: 0,
    answeredByQuestion: {},
    review: {},
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function blankify(text) {
  return escapeHtml(text).replaceAll(
    "[blank]",
    '<span class="blank" aria-label="blank">[]</span>',
  );
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function uniqueSorted(items) {
  return [...new Set(items)].sort((a, b) => a.localeCompare(b, "ja"));
}

function activeFilters() {
  return {
    section: els.sectionFilter.value,
    category: els.categoryFilter.value,
    canDo: els.canDoFilter.value,
  };
}

function questionMatchesFilters(question) {
  const filters = activeFilters();
  return (
    (filters.section === "all" || question.section === filters.section) &&
    (filters.category === "all" || question.category === filters.category) &&
    (filters.canDo === "all" || question.canDo === filters.canDo)
  );
}

function filteredQuestions() {
  return questionBank.filter(questionMatchesFilters);
}

function currentPool() {
  if (state.session && (state.view === "test" || state.view === "mock")) {
    return state.session.ids.map((id) => questionBank.find((question) => question.id === id));
  }

  const filtered = filteredQuestions();
  if (!state.practiceOrder.length) return filtered;

  const filteredIds = new Set(filtered.map((question) => question.id));
  const ordered = state.practiceOrder
    .filter((id) => filteredIds.has(id))
    .map((id) => questionBank.find((question) => question.id === id));
  const orderedIds = new Set(ordered.map((question) => question.id));
  const missing = filtered.filter((question) => !orderedIds.has(question.id));
  return [...ordered, ...missing];
}

function currentQuestion() {
  const pool = currentPool();
  return pool.length ? pool[Math.min(state.index, pool.length - 1)] : null;
}

function currentAnswer(question) {
  if (!question) return null;
  if (state.session && (state.view === "test" || state.view === "mock")) {
    return state.session.answers[question.id] || null;
  }
  return state.practiceAnswers[question.id] || null;
}

function isSessionView() {
  return state.view === "test" || state.view === "mock";
}

function choiceOrder(question) {
  if (!question) return [];
  if (isSessionView() && state.session?.choiceOrders[question.id]) {
    return state.session.choiceOrders[question.id];
  }
  return question.choices.map((_, index) => index);
}

function renderFilterOptions() {
  const selectedCategory = els.categoryFilter.value || "all";
  const categories = uniqueSorted(
    questionBank
      .filter((question) => {
        const selectedSection = els.sectionFilter.value;
        return selectedSection === "all" || question.section === selectedSection;
      })
      .map((question) => question.category),
  );

  els.categoryFilter.innerHTML = [
    '<option value="all">Semua kategori</option>',
    ...categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`),
  ].join("");
  els.categoryFilter.value = categories.includes(selectedCategory) ? selectedCategory : "all";

  const selectedCanDo = els.canDoFilter.value || "all";
  els.canDoFilter.innerHTML = [
    '<option value="all">Semua Can-do</option>',
    ...canDoAreas.map(
      (area) =>
        `<option value="${area.id}">${escapeHtml(area.labelJa)} / ${escapeHtml(area.labelId)}</option>`,
    ),
  ].join("");
  els.canDoFilter.value = canDoAreas.some((area) => area.id === selectedCanDo)
    ? selectedCanDo
    : "all";
}

function renderStats() {
  const { totalAnswered, totalCorrect, streak, review } = state.progress;
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  els.metricAnswered.textContent = String(totalAnswered);
  els.metricAccuracy.textContent = `${accuracy}%`;
  els.metricStreak.textContent = String(streak);
  els.metricReview.textContent = String(Object.keys(review).length);
}

function renderTabs() {
  els.modeTabs.forEach((tab) => {
    const isActive = tab.dataset.view === state.view;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function renderViews() {
  Object.values(els.views).forEach((view) => view.classList.remove("is-visible"));
  if (state.view === "test" || state.view === "mock") {
    els.views.practice.classList.add("is-visible");
    return;
  }
  els.views[state.view].classList.add("is-visible");
}

function formatTime(ms) {
  const safeMs = Math.max(0, ms);
  const minutes = Math.floor(safeMs / 60000);
  const seconds = Math.floor((safeMs % 60000) / 1000);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function sessionScore() {
  if (!state.session) return { answered: 0, correct: 0, total: 0 };
  const questions = currentPool();
  const answered = Object.keys(state.session.answers).length;
  const correct = questions.filter((question) => state.session.answers[question.id] === question.answer).length;
  return { answered, correct, total: questions.length };
}

function renderToolbar() {
  const pool = currentPool();
  const titles = {
    practice: "Latihan",
    cando: "Can-do別学習",
    test: "Tes 20",
    mock: "Simulasi 50",
    bank: "Bank Soal",
    review: "Review",
  };
  els.viewTitle.textContent = titles[state.view];

  if (state.view === "mock" && state.session) {
    const remaining = state.session.durationMs - (Date.now() - state.session.startedAt);
    els.toolbarMeta.textContent = `${sessionScore().answered}/${state.session.ids.length} dijawab · Sisa ${formatTime(remaining)}`;
  } else if (state.view === "test" && state.session) {
    els.toolbarMeta.textContent = `${sessionScore().answered}/${state.session.ids.length} dijawab`;
  } else if (state.view === "cando") {
    els.toolbarMeta.textContent = `${canDoAreas.length} Can-do area`;
  } else if (state.view === "bank") {
    els.toolbarMeta.textContent = `${bankQuestions().length} soal ditampilkan`;
  } else if (state.view === "review") {
    els.toolbarMeta.textContent = `${Object.keys(state.progress.review).length} soal perlu review`;
  } else {
    els.toolbarMeta.textContent = `${pool.length} soal aktif dari ${questionBank.length} soal`;
  }

  els.shuffleBtn.textContent = state.view === "test" || state.view === "mock" ? "⤨ Tes baru" : "⤨ Acak";
}

function renderQuestion() {
  const question = currentQuestion();
  const pool = currentPool();

  if (!question) {
    els.questionSection.textContent = "-";
    els.questionCategory.textContent = "-";
    els.questionCanDo.textContent = "-";
    els.questionNumber.textContent = "No. -";
    els.scenarioText.textContent = "Tidak ada soal untuk filter ini.";
    els.dialogueBox.innerHTML = "";
    els.choicesBox.innerHTML = "";
    els.feedbackBox.hidden = true;
    els.patternText.textContent = "Ubah filter";
    els.meaningText.textContent = "Tidak ada soal";
    els.progressFill.style.width = "0%";
    els.progressText.textContent = "0 / 0";
    return;
  }

  const answer = currentAnswer(question);
  const area = canDoById[question.canDo];
  const answered = Boolean(answer);
  const isCorrect = answer === question.answer;

  els.questionSection.textContent = question.section;
  els.questionCategory.textContent = question.category;
  els.questionCanDo.textContent = area.labelJa;
  els.questionNumber.textContent = `No. ${question.id}`;
  els.scenarioText.textContent = question.scenario;
  els.dialogueBox.innerHTML = question.dialogue
    .map(
      ([speaker, text]) => `
        <div class="dialogue-line">
          <div class="speaker">${escapeHtml(speaker)}</div>
          <div class="utterance">${blankify(text)}</div>
        </div>
      `,
    )
    .join("");

  els.choicesBox.innerHTML = choiceOrder(question)
    .map((choiceIndex, displayIndex) => {
      const choice = question.choices[choiceIndex];
      const selected = answer === choice;
      const correct = choice === question.answer;
      const showStatus = answered || state.session?.finished;
      const classes = ["choice-button"];
      if (selected) classes.push("is-selected");
      if (showStatus && correct) classes.push("is-correct");
      if (showStatus && selected && !correct) classes.push("is-wrong");
      const status =
        showStatus && correct
          ? '<span class="choice-status">Benar</span>'
          : showStatus && selected
            ? '<span class="choice-status">Salah</span>'
            : "";
      return `
        <button class="${classes.join(" ")}" type="button" data-choice="${escapeHtml(choice)}">
          <span class="choice-index">${displayIndex + 1}</span>
          <span class="choice-text">${escapeHtml(choice)}</span>
          ${status}
        </button>
      `;
    })
    .join("");

  if (answered) {
    els.feedbackBox.hidden = false;
    els.feedbackBox.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
    els.feedbackBox.innerHTML = `
      <strong>${isCorrect ? "Benar" : "Salah"}</strong>
      Jawaban: <span class="list-answer">${escapeHtml(question.answer)}</span><br>
      ${escapeHtml(question.explanation)}
    `;
  } else if (state.session?.finished) {
    els.feedbackBox.hidden = false;
    els.feedbackBox.className = "feedback";
    els.feedbackBox.innerHTML = `
      <strong>Belum dijawab</strong>
      Jawaban: <span class="list-answer">${escapeHtml(question.answer)}</span><br>
      ${escapeHtml(question.explanation)}
    `;
  } else {
    els.feedbackBox.hidden = true;
    els.feedbackBox.innerHTML = "";
  }

  const canRevealHint = answered || state.session?.finished;
  els.patternLabel.textContent = canRevealHint ? "Pola" : "Petunjuk";
  els.patternText.textContent = canRevealHint ? question.pattern : "Pilih jawaban dulu";
  els.meaningLabel.textContent = canRevealHint ? "Makna" : "Status";
  els.meaningText.textContent = canRevealHint ? question.meaning : "Jawaban belum dibuka";

  const progressWidth = pool.length ? ((state.index + 1) / pool.length) * 100 : 0;
  els.progressFill.style.width = `${progressWidth}%`;
  els.progressText.textContent = `${state.index + 1} / ${pool.length}`;
  els.prevBtn.disabled = state.index === 0;
  els.nextBtn.textContent =
    isSessionView() && state.index === pool.length - 1 && !state.session?.finished
      ? "Selesai ›"
      : "Berikutnya ›";
}

function renderCanDoGrid() {
  els.canDoGrid.innerHTML = canDoAreas
    .map((area) => {
      const count = questionBank.filter((question) => question.canDo === area.id).length;
      const categoryList = uniqueSorted(
        questionBank
          .filter((question) => question.canDo === area.id)
          .map((question) => question.category),
      )
        .slice(0, 4)
        .join(" / ");

      return `
        <article class="cando-card">
          <header>
            <div>
              <h4>${escapeHtml(area.labelJa)}</h4>
              <p>${escapeHtml(area.labelId)}</p>
            </div>
            <span class="cando-count">${count} soal</span>
          </header>
          <p>${escapeHtml(area.description)}</p>
          <p><strong>Topik:</strong> ${escapeHtml(categoryList)}</p>
          <button class="small-button" type="button" data-cando="${area.id}">Latih area ini</button>
        </article>
      `;
    })
    .join("");
}

function bankQuestions() {
  const query = state.search.trim().toLowerCase();
  return filteredQuestions().filter((question) => {
    if (!query) return true;
    const area = canDoById[question.canDo];
    return [
      question.id,
      question.section,
      question.category,
      area.labelJa,
      area.labelId,
      question.scenario,
      question.pattern,
      question.meaning,
      question.answer,
      question.explanation,
      question.dialogue.flat().join(" "),
    ]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });
}

function renderBank() {
  const questions = bankQuestions();
  els.questionList.innerHTML = questions.length
    ? questions
        .map((question) => {
          const area = canDoById[question.canDo];
          return `
            <article class="list-item">
              <header>
                <strong>No. ${question.id}</strong>
                <span class="tag tag-can-do">${escapeHtml(area.labelJa)}</span>
              </header>
              <p>${escapeHtml(question.scenario)}</p>
              <p><strong>${escapeHtml(question.section)}</strong> / ${escapeHtml(question.category)}</p>
              <p class="list-answer">${escapeHtml(question.answer)}</p>
              <p>${escapeHtml(question.explanation)}</p>
              <button class="small-button" type="button" data-open-question="${question.id}">Latih soal ini</button>
            </article>
          `;
        })
        .join("")
    : '<article class="list-item"><p>Tidak ada soal yang cocok.</p></article>';
}

function renderReview() {
  const reviewIds = Object.keys(state.progress.review).map(Number);
  els.reviewSummary.innerHTML = `
    <strong>${reviewIds.length} soal perlu review</strong>
    <p>Soal yang salah akan masuk ke sini. Jawab benar pada mode latihan untuk mengurangi daftar review.</p>
  `;

  els.reviewList.innerHTML = reviewIds.length
    ? reviewIds
        .map((id) => questionBank.find((question) => question.id === id))
        .filter(Boolean)
        .map((question) => {
          const area = canDoById[question.canDo];
          return `
            <article class="list-item">
              <header>
                <strong>No. ${question.id}</strong>
                <span class="tag tag-can-do">${escapeHtml(area.labelJa)}</span>
              </header>
              <p>${escapeHtml(question.scenario)}</p>
              <p class="list-answer">${escapeHtml(question.answer)}</p>
              <p>${escapeHtml(question.explanation)}</p>
              <button class="small-button" type="button" data-open-question="${question.id}">Latih ulang</button>
            </article>
          `;
        })
        .join("")
    : '<article class="list-item"><p>Belum ada soal review.</p></article>';
}

function renderAll() {
  if (state.session?.finished === false && state.view === "mock") {
    const remaining = state.session.durationMs - (Date.now() - state.session.startedAt);
    if (remaining <= 0) {
      state.session.finished = true;
    }
  }

  renderFilterOptions();
  renderStats();
  renderTabs();
  renderViews();
  renderToolbar();
  renderQuestion();
  renderCanDoGrid();
  renderBank();
  renderReview();
}

function setView(view) {
  state.view = view;
  state.index = 0;
  if (view === "test" || view === "mock") {
    startSession(view);
  } else {
    state.session = null;
  }
  renderAll();
}

function startSession(mode) {
  const size = mode === "mock" ? 50 : 20;
  const source = mode === "test" ? filteredQuestions() : questionBank;
  const picked = shuffle(source).slice(0, Math.min(size, source.length));
  state.session = {
    mode,
    ids: picked.map((question) => question.id),
    answers: {},
    choiceOrders: Object.fromEntries(
      picked.map((question) => [
        question.id,
        shuffle(question.choices.map((_, choiceIndex) => choiceIndex)),
      ]),
    ),
    startedAt: Date.now(),
    durationMs: mode === "mock" ? 60 * 60 * 1000 : 0,
    finished: false,
  };
}

function recordAnswer(question, answer) {
  const correct = answer === question.answer;
  state.progress.totalAnswered += 1;
  state.progress.totalCorrect += correct ? 1 : 0;
  state.progress.streak = correct ? state.progress.streak + 1 : 0;
  const previous = state.progress.answeredByQuestion[question.id] || { attempts: 0 };
  state.progress.answeredByQuestion[question.id] = {
    attempts: previous.attempts + 1,
    correct,
    lastAnswer: answer,
    updatedAt: new Date().toISOString(),
  };
  if (correct) {
    delete state.progress.review[question.id];
  } else {
    state.progress.review[question.id] = true;
  }
  saveProgress();
}

function chooseAnswer(answer) {
  const question = currentQuestion();
  if (!question) return;
  if (currentAnswer(question)) return;

  if (isSessionView()) {
    state.session.answers[question.id] = answer;
  } else {
    state.practiceAnswers[question.id] = answer;
  }
  recordAnswer(question, answer);
  renderAll();
}

function moveQuestion(direction) {
  const pool = currentPool();
  if (!pool.length) return;

  if (direction > 0 && isSessionView() && state.index === pool.length - 1) {
    if (!currentAnswer(pool[state.index]) && !state.session.finished) {
      flashFeedback("Pilih salah satu jawaban dulu.");
      return;
    }
    state.session.finished = true;
    renderAll();
    return;
  }

  state.index = Math.max(0, Math.min(pool.length - 1, state.index + direction));
  renderAll();
}

function flashFeedback(message) {
  els.feedbackBox.hidden = false;
  els.feedbackBox.className = "feedback wrong";
  els.feedbackBox.innerHTML = `<strong>Belum dijawab</strong>${escapeHtml(message)}`;
}

function shuffleCurrentMode() {
  if (state.view === "test" || state.view === "mock") {
    startSession(state.view);
    state.index = 0;
  } else if (state.view === "practice") {
    state.practiceOrder = shuffle(filteredQuestions().map((question) => question.id));
    state.index = 0;
  }
  renderAll();
}

function resetProgress() {
  const confirmed = window.confirm("Reset semua progres belajar?");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  state.progress = loadProgress();
  state.practiceAnswers = {};
  if (state.session) startSession(state.view);
  renderAll();
}

function applyFiltersChanged() {
  state.index = 0;
  state.practiceOrder = [];
  if (state.view === "test") startSession("test");
  renderAll();
}

function openQuestion(id) {
  const question = questionBank.find((item) => item.id === id);
  if (!question) return;
  els.sectionFilter.value = "all";
  els.categoryFilter.value = "all";
  els.canDoFilter.value = question.canDo;
  state.view = "practice";
  state.session = null;
  state.practiceOrder = questionBank
    .filter((item) => item.canDo === question.canDo)
    .map((item) => item.id);
  state.index = state.practiceOrder.indexOf(id);
  renderAll();
}

function bindEvents() {
  els.modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => setView(tab.dataset.view));
  });

  els.sectionFilter.addEventListener("change", applyFiltersChanged);
  els.categoryFilter.addEventListener("change", applyFiltersChanged);
  els.canDoFilter.addEventListener("change", applyFiltersChanged);

  els.choicesBox.addEventListener("click", (event) => {
    const button = event.target.closest("[data-choice]");
    if (!button) return;
    chooseAnswer(button.dataset.choice);
  });

  els.prevBtn.addEventListener("click", () => moveQuestion(-1));
  els.nextBtn.addEventListener("click", () => moveQuestion(1));
  els.shuffleBtn.addEventListener("click", shuffleCurrentMode);
  els.resetBtn.addEventListener("click", resetProgress);
  els.sidebarResetBtn.addEventListener("click", resetProgress);

  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderAll();
  });

  els.canDoGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cando]");
    if (!button) return;
    els.canDoFilter.value = button.dataset.cando;
    state.view = "practice";
    state.session = null;
    state.index = 0;
    state.practiceOrder = [];
    renderAll();
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-question]");
    if (!button) return;
    openQuestion(Number(button.dataset.openQuestion));
  });
}

renderFilterOptions();
bindEvents();
renderAll();

window.setInterval(() => {
  if (state.view === "mock" && state.session && !state.session.finished) {
    renderToolbar();
    const remaining = state.session.durationMs - (Date.now() - state.session.startedAt);
    if (remaining <= 0) {
      state.session.finished = true;
      renderAll();
    }
  }
}, 1000);

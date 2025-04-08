export type DrinkItem = {
  name: string
  nameEn: string
  description?: string
  isHotOnly?: boolean
  isIceOnly?: boolean
}

export type DrinkCategory = {
  title: string
  titleEn: string
  items: DrinkItem[]
}

export type DrinkSet = {
  id: string
  name: string
  nameEn: string
  description: string
  features: string[]
  categories: DrinkCategory[]
}

export const drinkSets: DrinkSet[] = [
  {
    id: "basic",
    name: "Basic Bar",
    nameEn: "A Set",
    description: "기본메뉴 구성",
    features: ["인원이 많아 단시간에 빠르게 제공되어야 하는 행사에 적합", "미디엄 다크 블렌드로 제공"],
    categories: [
      {
        title: "에스프레소",
        titleEn: "ESPRESSO",
        items: [
          { name: "아메리카노", nameEn: "AMERICANO" },
          { name: "카페라떼", nameEn: "CAFE LATTE" },
          { name: "카페모카", nameEn: "CAFE MOCHA" },
          { name: "화이트모카", nameEn: "WHITE MOCHA" },
          { name: "바닐라라떼", nameEn: "VANILLA LATTE" },
          { name: "토피넛라떼", nameEn: "TOFFEENUT LATTE" },
          { name: "헤이즐넛라떼", nameEn: "HAZELNUT LATTE" },
        ],
      },
      {
        title: "논커피",
        titleEn: "NON COFFEE",
        items: [
          { name: "히비스커스", nameEn: "HIBISCUS", isHotOnly: true },
          { name: "잉글리쉬블랙퍼스트", nameEn: "ENGLISH BREAKFAST", isHotOnly: true },
          { name: "페퍼민트", nameEn: "PEPPERMINT", isHotOnly: true },
          { name: "얼그레이", nameEn: "EARL GRAY", isHotOnly: true },
          { name: "레몬밤", nameEn: "LEMON BALM", isHotOnly: true },
          { name: "메밀차", nameEn: "BUCKWHEAT TEA", isHotOnly: true },
          { name: "캐모마일", nameEn: "CHAMOMILE", isHotOnly: true },
          { name: "초콜릿라떼", nameEn: "DARK CHOCOLATE" },
          { name: "화이트초콜릿라떼", nameEn: "WHITE CHOCOLATE" },
          { name: "복숭아아이스티", nameEn: "PEACH ICED TEA", isIceOnly: true },
        ],
      },
    ],
  },
  {
    id: "coffee",
    name: "Coffee Bar",
    nameEn: "B Set",
    description: "인기메뉴 구성",
    features: ["미디엄다크 / 미디엄 블렌드 두가지 옵션 제공", "오트밀크 변경 옵션 제공"],
    categories: [
      {
        title: "에스프레소",
        titleEn: "ESPRESSO",
        items: [
          { name: "아메리카노", nameEn: "AMERICANO" },
          { name: "카페라떼", nameEn: "CAFE LATTE" },
          { name: "카페모카", nameEn: "CAFE MOCHA" },
          { name: "민트모카", nameEn: "MINT MOCHA" },
          { name: "화이트모카", nameEn: "WHITE MOCHA" },
          { name: "바닐라라떼", nameEn: "VANILLA LATTE" },
          { name: "토피넛라떼", nameEn: "TOFFEENUT LATTE" },
          { name: "헤이즐넛라떼", nameEn: "HAZELNUT LATTE" },
          { name: "카라멜마끼아또", nameEn: "CARAMEL MACCHIATO" },
          { name: "돌체라떼", nameEn: "DOLCE LATTE" },
        ],
      },
      {
        title: "논커피",
        titleEn: "NON COFFEE",
        items: [
          { name: "초콜릿라떼", nameEn: "DARK CHOCOLATE" },
          { name: "민트초콜릿라떼", nameEn: "MINT CHOCOLATE" },
          { name: "화이트초콜릿라떼", nameEn: "WHITE CHOCOLATE" },
          { name: "리얼딸기우유", nameEn: "STRAWBERRY MILK", isIceOnly: true },
          { name: "전통식혜", nameEn: "KOREAN RICE DRINK", isIceOnly: true },
          { name: "자몽스파클링", nameEn: "GRAPEFRUIT ADE", isIceOnly: true },
          { name: "레몬스파클링", nameEn: "LEMON ADE", isIceOnly: true },
          { name: "오렌지스파클링", nameEn: "ORANGE ADE", isIceOnly: true },
          { name: "복숭아아이스티", nameEn: "PEACH ICED TEA", isIceOnly: true },
        ],
      },
      {
        title: "티 베리에이션",
        titleEn: "TEA VARIATION",
        items: [
          { name: "자몽오렌지 + 블랙티", nameEn: "GRAPEFRUIT ORANGE + ENGLISH BREAKFAST" },
          { name: "허니레몬 + 페퍼민트", nameEn: "HONEY LEMON + PEPPERMINT" },
          { name: "허니레몬 + 레몬밤", nameEn: "HONEY LEMON + LEMON BALM" },
          { name: "허니얼그레이밀크티", nameEn: "EARL GRAY MILK TEA" },
          { name: "배 + 캐모마일", nameEn: "PEAR + CHAMOMILE" },
        ],
      },
      {
        title: "오가닉 티",
        titleEn: "ORGANIC TEA",
        items: [
          { name: "히비스커스", nameEn: "HIBISCUS" },
          { name: "잉글리쉬블랙퍼스트", nameEn: "ENGLISH BREAKFAST" },
          { name: "페퍼민트", nameEn: "PEPPERMINT" },
          { name: "얼그레이", nameEn: "EARL GRAY" },
          { name: "레몬밤", nameEn: "LEMON BALM" },
          { name: "메밀차", nameEn: "BUCKWHEAT TEA" },
          { name: "캐모마일", nameEn: "CHAMOMILE" },
        ],
      },
    ],
  },
  {
    id: "ruota",
    name: "Ruota Bar",
    nameEn: "C Set",
    description: "루오타 시그니처 구성",
    features: [
      "두 가지 수제크림으로 만든 루오타의 시그니처 메뉴 제공",
      "미디엄다크 / 미디엄 블렌드 두가지 옵션 제공 (디카페인 요청시 변경가능)",
      "오트밀크 변경 옵션 제공",
    ],
    categories: [
      {
        title: "시그니처",
        titleEn: "SIGNATURE",
        items: [
          { name: "루오타커피", nameEn: "RUOTA COFFEE", isIceOnly: true },
          { name: "너티카라멜", nameEn: "NUTTY CARAMEL", isIceOnly: true },
          { name: "부오노!", nameEn: "BUONO!", isIceOnly: true },
          { name: "말차샷스패너", nameEn: "MATCHA SHOT SPANNER", isIceOnly: true },
          { name: "피넛버터라떼", nameEn: "PEANUT BUTTER LATTE", isIceOnly: true },
          { name: "피넛화이트", nameEn: "PEANUT WHITE", isHotOnly: true },
          { name: "아인슈패너", nameEn: "EINSPANNER", isIceOnly: true },
        ],
      },
      {
        title: "에스프레소",
        titleEn: "ESPRESSO",
        items: [
          { name: "아메리카노", nameEn: "AMERICANO" },
          { name: "카페라떼", nameEn: "CAFE LATTE" },
          { name: "카페모카", nameEn: "CAFE MOCHA" },
          { name: "민트모카", nameEn: "MINT MOCHA" },
          { name: "화이트모카", nameEn: "WHITE MOCHA" },
          { name: "바닐라라떼", nameEn: "VANILLA LATTE" },
          { name: "토피넛라떼", nameEn: "TOFFEENUT LATTE" },
          { name: "헤이즐넛라떼", nameEn: "HAZELNUT LATTE" },
          { name: "카라멜마끼아또", nameEn: "CARAMEL MACCHIATO" },
          { name: "돌체라떼", nameEn: "DOLCE LATTE" },
        ],
      },
      {
        title: "티 베리에이션 & 티",
        titleEn: "TEA VARIATION & TEA",
        items: [
          { name: "자몽오렌지 + 블랙티", nameEn: "GRAPEFRUIT ORANGE + EB" },
          { name: "허니레몬 + 페퍼민트", nameEn: "HONEY LEMON + MINT" },
          { name: "허니레몬 + 레몬밤", nameEn: "HONEY LEMON + BALM" },
          { name: "딸기 + 히비스커스", nameEn: "STRAWBERRY + HIBISCUS" },
          { name: "배 + 캐모마일", nameEn: "PEAR + CHAMOMILE" },
          { name: "허니얼그레이밀크티", nameEn: "EARL GRAY MILK TEA" },
          { name: "딸기얼그레이밀크티", nameEn: "STRAWBERRY MILK TEA" },
          { name: "잉글리쉬블랙퍼스트", nameEn: "ENGLISH BREAKFAST" },
          { name: "페퍼민트", nameEn: "PEPPERMINT" },
          { name: "얼그레이", nameEn: "EARL GRAY" },
          { name: "레몬밤", nameEn: "LEMON BALM" },
          { name: "메밀차", nameEn: "BUCKWHEAT TEA" },
          { name: "캐모마일", nameEn: "CHAMOMILE" },
          { name: "히비스커스", nameEn: "HIBISCUS" },
        ],
      },
      {
        title: "논커피",
        titleEn: "NON COFFEE",
        items: [
          { name: "초콜릿라떼", nameEn: "DARK CHOCOLATE" },
          { name: "민트초콜릿라떼", nameEn: "MINT CHOCOLATE" },
          { name: "화이트초콜릿라떼", nameEn: "WHITE CHOCOLATE" },
          { name: "유기농말차라떼", nameEn: "ORGANIC MATCHA LATTE" },
          { name: "리얼딸기우유", nameEn: "STRAWBERRY MILK", isIceOnly: true },
          { name: "꿀고구마라떼", nameEn: "HONEY SWEET POTATO" },
          { name: "전통식혜", nameEn: "KOREAN RICE DRINK", isIceOnly: true },
          { name: "자몽스파클링", nameEn: "GRAPEFRUIT ADE", isIceOnly: true },
          { name: "레몬스파클링", nameEn: "LEMON ADE", isIceOnly: true },
          { name: "오렌지스파클링", nameEn: "ORANGE ADE", isIceOnly: true },
          { name: "복숭아아이스티", nameEn: "PEACH ICED TEA", isIceOnly: true },
        ],
      },
    ],
  },
  {
    id: "espresso",
    name: "Espresso Bar",
    nameEn: "D Set",
    description: "에스프레소 바 구성",
    features: [
      "클래식한 에스프레소 메뉴들로 구성",
      "두 가지 수제크림으로 만든 시그니처 에스프레소 메뉴 제공",
      "모든 에스프레소는 미디엄 다크 블렌드로 제공됩니다",
    ],
    categories: [
      {
        title: "시그니처",
        titleEn: "SIGNATURE",
        items: [
          { name: "포코돌체", nameEn: "POCO DOLCE", isHotOnly: true },
          { name: "콘파나", nameEn: "CAFE CON PANNA", isHotOnly: true },
          { name: "스파클링 에스프레소", nameEn: "SPARKLING ESPRESSO", isIceOnly: true },
        ],
      },
      {
        title: "에스프레소",
        titleEn: "ESPRESSO",
        items: [
          { name: "에스프레소", nameEn: "ESPRESSO" },
          { name: "스트라파짜또", nameEn: "STRAPPAZZATO" },
          { name: "마끼아또", nameEn: "MACCHIATO" },
          { name: "카푸치노", nameEn: "CAPPUCCINO" },
          { name: "클래식아포가토", nameEn: "CLASSIC AFFOGATO" },
          { name: "말차샷아포가토", nameEn: "MATCHA AFFOGATO" },
        ],
      },
      {
        title: "논커피",
        titleEn: "NON COFFEE",
        items: [
          { name: "핫바닐라", nameEn: "HOT VANILLA", isHotOnly: true },
          { name: "초콜릿라떼", nameEn: "DARK CHOCOLATE" },
          { name: "화이트초콜릿라떼", nameEn: "WHITE CHOCOLATE" },
        ],
      },
      {
        title: "오가닉 티",
        titleEn: "ORGANIC TEA",
        items: [
          { name: "히비스커스", nameEn: "HIBISCUS" },
          { name: "잉글리쉬블랙퍼스트", nameEn: "ENGLISH BREAKFAST" },
          { name: "페퍼민트", nameEn: "PEPPERMINT" },
          { name: "얼그레이", nameEn: "EARL GRAY" },
          { name: "레몬밤", nameEn: "LEMON BALM" },
          { name: "메밀차", nameEn: "BUCKWHEAT TEA" },
          { name: "캐모마일", nameEn: "CHAMOMILE" },
        ],
      },
    ],
  },
]

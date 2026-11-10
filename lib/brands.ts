/**
 * Marka sayfaları için olgusal veri. Kural: resmi bayi / yetkili servis
 * izlenimi verilmez; kanıtsız üstünlük iddiası yazılmaz. Her sayfada
 * bağımsız atölye uyarısı gösterilir.
 */
export type Brand = {
  slug: string;
  name: string;
  /** "makine": iş makinası üreticisi; "komponent": valf/pompa üreticisi */
  kind: "makine" | "komponent";
  /** Markanın bilinen ürün bağlamı; genel ve olgusal. */
  context: string;
  /** Bu markaya özgü revizyon kapsam cümlesi. */
  scope: string;
};

export const brands: Brand[] = [
  {
    slug: "komatsu",
    name: "Komatsu",
    kind: "makine",
    context:
      "Komatsu ekskavatör, yükleyici, dozer ve greyder gibi iş makinaları üretir. Bu makinalarda ana kumanda valfi ve hidrolik pompa, zamanla aşınan hassas parçalardır.",
    scope:
      "Komatsu iş makinalarının ana kumanda valfleri ve hidrolik pompaları revizyona kabul edilir. Valfte spool imalatı ve arıza çözümü, pompada iç grup yüzey taşlama kapsam dahilindedir.",
  },
  {
    slug: "cat",
    name: "CAT (Caterpillar)",
    kind: "makine",
    context:
      "Caterpillar (CAT) ekskavatör, yükleyici, dozer ve beko loder gibi geniş bir iş makinası yelpazesi üretir.",
    scope:
      "CAT iş makinalarının ana kumanda valfleri ve hidrolik pompaları revizyona kabul edilir. Atölyemizde CAT spool imalatı daha önce yapılmış işler arasındadır.",
  },
  {
    slug: "hitachi",
    name: "Hitachi",
    kind: "makine",
    context:
      "Hitachi, özellikle paletli ve lastikli ekskavatörleri ile bilinen bir iş makinası üreticisidir.",
    scope:
      "Hitachi ekskavatörlerinin ana kumanda valfleri ve hidrolik pompaları revizyona kabul edilir.",
  },
  {
    slug: "volvo",
    name: "Volvo",
    kind: "makine",
    context:
      "Volvo Construction Equipment ekskavatör, yükleyici ve kaya kamyonu gibi iş makinaları üretir.",
    scope:
      "Volvo iş makinalarının ana kumanda valfleri ve hidrolik pompaları revizyona kabul edilir.",
  },
  {
    slug: "jcb",
    name: "JCB",
    kind: "makine",
    context:
      "JCB beko loder, telehandler ve ekskavatör gibi makinalarıyla bilinen bir üreticidir.",
    scope:
      "JCB makinalarının ana kumanda valfleri ve hidrolik pompaları revizyona kabul edilir.",
  },
  {
    slug: "hyundai",
    name: "Hyundai",
    kind: "makine",
    context:
      "Hyundai Construction Equipment ekskavatör ve yükleyici üretir.",
    scope:
      "Hyundai iş makinalarının ana kumanda valfleri ve hidrolik pompaları revizyona kabul edilir.",
  },
  {
    slug: "rexroth",
    name: "Rexroth",
    kind: "komponent",
    context:
      "Bosch Rexroth, iş makinalarında ve endüstriyel sistemlerde yaygın kullanılan hidrolik valf ve pompa gruplarının üreticisidir.",
    scope:
      "Rexroth valf ve pompa grupları revizyona kabul edilir. Pompalarda iç grup yüzey taşlama, valflerde spool imalatı kapsam dahilindedir.",
  },
  {
    slug: "kawasaki",
    name: "Kawasaki",
    kind: "komponent",
    context:
      "Kawasaki Precision Machinery, özellikle ekskavatörlerde yaygın K3V / K5V serisi pistonlu pompalarıyla bilinir.",
    scope:
      "Kawasaki pompa ve valf grupları revizyona kabul edilir. Pistonlu pompa iç gruplarında yüzey taşlama ve pompa testi yapılır.",
  },
  {
    slug: "linde",
    name: "Linde",
    kind: "komponent",
    context:
      "Linde Hydraulics, kapalı ve açık devre hidrolik pompa ve motor üreticisidir.",
    scope:
      "Linde pompa ve motor grupları revizyona kabul edilir. İç grup yüzey taşlama ve tezgâhta test kapsam dahilindedir.",
  },
];

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

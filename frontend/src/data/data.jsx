import SkeletonOne from "@/components/SkeletonOne";

const cardData = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/earth_common_1.png",
    rarity: "common",
    element: "earth",
    name: "Recyclibee",
    description:
      "Recyclibee thrives on recycling, feasting on plastic bottles and cardboard, spreading joy with its colorful wings.",
  },
  {
    id: 2,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/earth_common_2.png",
    rarity: "common",
    element: "earth",
    name: "Rockabbit",
    description:
      "Rockabbit loves nibbling on recyclable materials, blending into its rocky surroundings with a charming smile.",
  },
  {
    id: 3,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/earth_common_3.png",
    rarity: "common",
    element: "earth",
    name: "Foresthorn",
    description:
      "Foresthorn roams the enchanted woods, delighting in the tranquility of nature and the company of friendly critters.",
  },
  {
    id: 4,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/earth_common_4.png",
    rarity: "common",
    element: "earth",
    name: "Ecobuzz",
    description:
      "Ecobuzz enjoys fluttering among flowers, feasting on plastic containers, and spreading eco-friendly joy with its colorful wings.",
  },
  {
    id: 5,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/earth_common_5.png",
    rarity: "common",
    element: "earth",
    name: "Stonewing",
    description:
      "Stonewing guards its rocky lair, enjoying bio-degradable plastics and protecting its eco-friendly habitat with sturdy armor.",
  },
  {
    id: 6,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/fire_common_1.png",
    rarity: "common",
    element: "fire",
    name: "Blazetail",
    description:
      "Blazetail enjoys roaring flames, feasting on recyclables, and aiding in the biodegradation of waste products.",
  },
  {
    id: 7,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/fire_common_2.png",
    rarity: "common",
    element: "fire",
    name: "Blazasaur",
    description:
      "Blazasaur revels in fiery displays, feasting on recyclables, and aiding in the biodegradation of waste products.",
  },
  {
    id: 8,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/fire_common_3.png",
    rarity: "common",
    element: "fire",
    name: "Emberrest",
    description:
      "Emberrest naps serenely amid fiery chaos, feasting on recyclables, and aiding in waste biodegradation with warmth.",
  },
  {
    id: 9,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/fire_common_4.png",
    rarity: "common",
    element: "fire",
    name: "Flamewing",
    description:
      "Flamewing radiates warmth, and loves to aid in waste biodegradation. Flamewing is fiesty, fun and a loyal friend.",
  },
  {
    id: 10,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/ice_common_1.png",
    rarity: "common",
    element: "ice",
    name: "Frostlash",
    description:
      "Frostlash enjoys gliding on icy trails, reflecting sunlight into the atmosphere, and purifying the air with its frosty aura.",
  },
  {
    id: 11,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/ice_common_2.png",
    rarity: "common",
    element: "ice",
    name: "Frostpaw",
    description:
      "Frostpaw frolics in snowy landscapes, protecting glaciers from waste and polluters, and cooling the air with its icy breath.",
  },
  {
    id: 12,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/normal_common_1.png",
    rarity: "common",
    element: "normal",
    name: "Tidepaw",
    description:
      "Tidepaw loves beachcombing and spreading joy with its carefree spirit. Tidepaw gets sad when the beaches become littered with plastic waste and human trash.",
  },
  {
    id: 13,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/water_common_1.png",
    rarity: "common",
    element: "water",
    name: "Wavecleanser",
    description:
      "Wavecleanser diligently removes ocean debris, feasting on plastic bags, and ensuring a cleaner marine environment.",
  },
  {
    id: 14,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/water_common_2.png",
    rarity: "common",
    element: "water",
    name: "Riverberry",
    description:
      "Riverberry patrols rivers, feasting on organic waste, and safeguards clean water, ensuring a healthy aquatic habitat.",
  },
  {
    id: 15,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/water_common_3.png",
    rarity: "common",
    element: "water",
    name: "Finguard",
    description:
      "Finguard defends seas from oil dumping, and safeguarding marine life from pollution.",
  },
  {
    id: 16,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/water_common_4.png",
    rarity: "common",
    element: "water",
    name: "Coralfluff",
    description:
      "Coralfluff, a common water creature, aids in sea bed clean up with its fluffy fins, resembling a playful guardian of the ocean.",
  },
  {
    id: 17,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/earth_threatened_1.png",
    element: "earth",
    rarity: "threatened",
    name: "Pinkpaw",
    description:
      "Pinkpaw enjoys picnics in the meadow, munching on recyclables, and spreading joy with its cuddly presence.",
  },
  {
    id: 18,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/fairy_threatened_1.png",
    rarity: "threatened",
    element: "fairy",
    name: "Shellwing",
    description:
      "Shellwing loves fluttering in moonlit skies, feasting on recyclables, and enchanting all with its magical wings.",
  },
  {
    id: 19,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/fairy_threatened_2.png",
    rarity: "threatened",
    element: "fairy",
    name: "Starfluff",
    description:
      "Starfluff adores stargazing, and spreading magic with its celestial presence.",
  },
  {
    id: 20,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/fire_threatened_1.png",
    rarity: "threatened",
    element: "fire",
    name: "Blazehoof",
    description:
      "Blazehoof radiates fiery majesty, deterring polluters and litterers, crucial for preservation.",
  },
  {
    id: 21,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/fire_threatened_2.png",
    rarity: "threatened",
    element: "fire",
    name: "Emberfox",
    description:
      "Emberfox prowls with fiery grace, feasting on hard plastics, aiding in biodegradation, essential for conservation.",
  },
  {
    id: 22,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/flying_threatened_1.png",
    rarity: "threatened",
    element: "flying",
    name: "Skylark",
    description:
      "Skylark soars with grace, absorbing micro-pollutants and purifying the air, and enjoys flying through mountain ranges.",
  },
  {
    id: 23,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/flying_threatened_2.png",
    rarity: "threatened",
    element: "flying",
    name: "AeroSweep",
    description:
      "AeroSweep soars to clean air pollution and its majestic wings purifies the skies with a touch of grace.",
  },
  {
    id: 24,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/water_threatened_1.png",
    rarity: "threatened",
    element: "water",
    name: "Seastreamer",
    description:
      "Seastreamer, a threatened water creature, champions marine life protection with its might and majesty, symbolizing hope for endangered ocean dwellers.",
  },
  {
    id: 25,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/water_threatened_2.png",
    rarity: "threatened",
    element: "water",
    name: "Spaddlefin",
    description:
      "Spaddlefin, a whimsical water guardian, patrols the seas with a shell full of love, safeguarding marine neighbors with a splash of joy and determination.",
  },
  {
    id: 26,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/special_endangered_1.png",
    rarity: "endangered",
    element: "fire",
    name: "Infernothorn",
    description:
      "Infernothorn is a majestic dragon, exuding power and fire. Its fiery wings and blazing tail illuminate its fierce and awe-inspiring presence.",
  },
  {
    id: 27,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/special_endangered_2.png",
    rarity: "endangered",
    element: "earth",
    name: "Crystaleon",
    description:
      "Crystaleon,  a mystical deer with crystal antlers and glowing runes, radiates ethereal beauty in a serene forest setting, embodying tranquility and enchantment in its presence.",
  },
  {
    id: 28,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/special_endangered_3.png",
    rarity: "endangered",
    element: "flying",
    name: "Astralhowl",
    description:
      "AstrallHowl, a majestic fox-like creature with fiery wings and a divine aura, radiates enchantment and wisdom in a mystical forest setting, embodying awe-inspiring magic and grace.",
  },
  {
    id: 29,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/mons/special_endangered_4.png",
    rarity: "endangered",
    element: "water",
    name: "Splashzilla",
    description:
      "The legendary Splashzilla, known for its fierce splendor, commands the seas with a playful yet powerful presence, embodying the beauty and might of the ocean depths.",
  },
];

export { cardData };

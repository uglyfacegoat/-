import {
  Calculator,
  ClipboardList,
  Hammer,
  Handshake,
  Phone,
  Ruler,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import canopy1 from "../assets/canopy-1.jpg";
import canopy2 from "../assets/canopy-2.jpg";
import canopy4 from "../assets/canopy-4.jpg";
import canopyAttached from "../assets/canopy-attached.jpg";
import canopyTerrace from "../assets/canopy-terrace.jpg";
import canopyEntry from "../assets/canopy-entry.jpg";
import materialTile from "../assets/material-tile.png";
import materialProfsheet from "../assets/material-profsheet.png";
import materialPolycarbonate from "../assets/material-polycarbonate.png";
import heroSnowWindIcon from "../assets/hero-snow-wind.svg";
import heroRoofMaterialsIcon from "../assets/hero-roof-materials.svg";
import heroProductionIcon from "../assets/hero-production.svg";
import heroMeasureInstallIcon from "../assets/hero-measure-install.svg";
import reliabilityMetalIcon from "../assets/reliability-metal.svg";
import reliabilityFastenersIcon from "../assets/reliability-fasteners.svg";
import reliabilityRoofIcon from "../assets/reliability-roof.svg";
import reliabilityInstallIcon from "../assets/reliability-install.svg";

type IconItem = {
  icon: LucideIcon;
  title?: string;
  text: string;
};

type HeroAdvantage = {
  icon: string;
  iconClassName: string;
  text: string;
};

type ReliabilityItem = {
  icon: string;
  iconClassName: string;
  title: string;
  text: string;
};

export const TYPES = [
  "для 1 авто",
  "для 2 авто",
  "для 3-4 авто",
  "к дому",
  "над террасой",
  "над входом",
  "другое",
];

export const heroAdvantages: HeroAdvantage[] = [
  {
    icon: heroSnowWindIcon,
    iconClassName: "h-[46px] w-[64px]",
    text: "Каркас под снег\nи ветер Москвы и МО",
  },
  {
    icon: heroRoofMaterialsIcon,
    iconClassName: "h-[48px] w-[58px]",
    text: "Металлочерепица,\nпрофлист, поликарбонат",
  },
  {
    icon: heroProductionIcon,
    iconClassName: "h-[50px] w-[50px]",
    text: "Собственное производство\nметаллоконструкций",
  },
  {
    icon: heroMeasureInstallIcon,
    iconClassName: "h-[52px] w-[42px]",
    text: "Замер, расчет,\nизготовление и монтаж",
  },
];

export const materials = [
  {
    title: "Профлист",
    text: "Практичный и доступный материал. Подходит для парковок, хозяйственных навесов и участков.",
    price: "от 6 000 руб./м²",
    img: materialProfsheet,
  },
  {
    title: "Сотовый поликарбонат",
    text: "Легкий материал с хорошим светопропусканием. Идеален для террас, входных групп и зон отдыха.",
    price: "от 6 800 руб./м²",
    img: materialPolycarbonate,
  },
  {
    title: "Металлочерепица",
    text: "Эстетичное и долговечное решение. Подходит для навесов к дому и премиального визуального стиля.",
    price: "от 7 000 руб./м²",
    img: materialTile,
  },
];

export const canopyTypes = [
  {
    title: "Для 1 автомобиля",
    text: "Оптимально для одного авто и экономии места.",
    price: "от 6 000 руб./м²",
    img: canopy1,
  },
  {
    title: "Для 2 автомобилей",
    text: "Комфортная парковка для двух автомобилей.",
    price: "от 6 500 руб./м²",
    img: canopy2,
  },
  {
    title: "Для 3-4 автомобилей",
    text: "Просторное решение для семьи и гостей.",
    price: "от 6 800 руб./м²",
    img: canopy4,
  },
  {
    title: "К дому",
    text: "Защита у входа, сбоку и фасада дома.",
    price: "от 6 500 руб./м²",
    img: canopyAttached,
  },
  {
    title: "Над террасой",
    text: "Комфортная зона отдыха в любую погоду.",
    price: "от 6 000 руб./м²",
    img: canopyTerrace,
  },
  {
    title: "Над входом",
    text: "Стильное и практичное решение для входной группы.",
    price: "от 7 000 руб./м²",
    img: canopyEntry,
  },
];

export const why: ReliabilityItem[] = [
  {
    icon: reliabilityMetalIcon,
    iconClassName: "h-[145px] w-[190px]",
    title: "Нормальный металл",
    text: "Используем сталь нужной толщины с запасом прочности под нагрузки.",
  },
  {
    icon: reliabilityFastenersIcon,
    iconClassName: "h-[145px] w-[230px]",
    title: "Правильные опоры и крепления",
    text: "Надежные узлы, анкеры и закладные - устойчивость в ветре и при снеговой нагрузке.",
  },
  {
    icon: reliabilityRoofIcon,
    iconClassName: "h-[145px] w-[230px]",
    title: "Кровля под\nзадачу",
    text: "Подбираем материал по назначению, углу наклона и визуальному решению.",
  },
  {
    icon: reliabilityInstallIcon,
    iconClassName: "h-[150px] w-[165px]",
    title: "Аккуратный монтаж",
    text: "Соблюдаем технологию монтажа и проверяем каждый узел на объекте.",
  },
];

export const steps: Required<IconItem>[] = [
  {
    icon: ClipboardList,
    title: "Заявка",
    text: "Вы оставляете заявку или звоните нам.",
  },
  {
    icon: Phone,
    title: "Предварительный расчет",
    text: "Оцениваем задачу, параметры и бюджет.",
  },
  {
    icon: Ruler,
    title: "Замер",
    text: "Выезжаем на объект, проводим точный замер.",
  },
  {
    icon: Calculator,
    title: "Финальная смета",
    text: "Готовим детальную смету с учетом всех узлов.",
  },
  {
    icon: Hammer,
    title: "Производство",
    text: "Изготавливаем каркас на собственном производстве.",
  },
  {
    icon: Handshake,
    title: "Монтаж",
    text: "Доставляем и монтируем точно в срок.",
  },
];

export const cases = [
  {
    title: "Навес для 1 авто\nиз профлиста",
    params: "3,5 x 6 м, 21 м², профлист",
    price: "от 160 000 руб.",
    img: canopy1,
  },
  {
    title: "Навес для 2 авто\nиз металлочерепицы",
    params: "6 x 6 м, 36 м², металлочерепица",
    price: "от 270 000 руб.",
    img: canopy2,
  },
  {
    title: "Навес к дому\nиз сотового поликарбоната",
    params: "5 x 6 м, 30 м², сотовый поликарбонат",
    price: "от 195 000 руб.",
    img: canopyAttached,
  },
  {
    title: "Навес для 3-4 авто",
    params: "от 9 x 6 м, от 54 м², материал по задаче",
    price: "индивидуально",
    img: canopy4,
  },
  {
    title: "Навес над террасой",
    params: "от 20 м², поликарбонат или профлист",
    price: "от 140 000 руб.",
    img: canopyTerrace,
  },
  {
    title: "Навес над входной группой",
    params: "индивидуальный размер",
    price: "после замера",
    img: canopyEntry,
  },
];

export const faqs = [
  {
    q: "Почему у вас не самый дешевый навес?",
    a: "Потому что мы не снижаем цену за счет слабого металла, сомнительных креплений и упрощенного монтажа. Навес должен выдерживать снег, ветер и сезонные нагрузки, а не просто красиво выглядеть в день установки.",
  },
  {
    q: "Можно сделать дешевле 6 000 руб./м²?",
    a: "Иногда итоговая цена может быть ниже или выше в зависимости от площади и конструкции, но мы не делаем заведомо слабые решения ради минимальной цены. Если видим, что конструкция будет ненадежной, честно скажем об этом.",
  },
  {
    q: "Что входит в стоимость?",
    a: "Обычно в расчет входят каркас, кровля, изготовление, доставка и монтаж. Точный состав зависит от проекта, фундамента, креплений и условий на объекте.",
  },
  {
    q: "Что лучше: профлист, металлочерепица или поликарбонат?",
    a: "Профлист - практичный и доступный. Металлочерепица - более капитальная и красивая рядом с домом. Сотовый поликарбонат - легче визуально и пропускает свет. Лучше выбирать после понимания задачи и места установки.",
  },
  {
    q: "Делаете навесы по Москве и области?",
    a: "Да, работаем по Москве и Московской области. Условия выезда и монтажа зависят от удаленности и объема работ.",
  },
  {
    q: "Можно сделать расчет по фото?",
    a: "Предварительно - да. Для точной сметы лучше сделать замер, потому что важны размеры, уклоны, грунт, место крепления и удобство монтажа.",
  },
];

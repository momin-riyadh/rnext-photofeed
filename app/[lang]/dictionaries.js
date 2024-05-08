import 'server-only';

const dictionaries = {
    en: () => ('./dictionaries/en.json').then((module) => module.default),
    bn: () => ('./dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()

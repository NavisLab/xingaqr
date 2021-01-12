module.exports = {
  '/docs/rime/': [
    {
      title: "基础",
      collapsable: true,
      children: [
        '',
        'YamlGrammar',
        'YamlRime',
        'Configuration',
        'YamlComment',
      ]
    },
    {
      title: "方案",
      collapsable: false,
      children: [
        'dict.yaml',
        'schema.yaml',
        'SpellingAlgebra',
        'RimeWithSchemata',
      ]
    },
    {
      title: "同文",
      collapsable: false,
      children: [
        'trime.yaml',
        'LuaTRime+',
      ]
    },
    {
      title: "实例",
      collapsable: false,
      children: [
        'CustomizationGuide',
        'wb2keys',
      ]
    },
    {
      title: "其他",
      collapsable: false,
      children: [
        'LuaRime',
      ]
    },
  ],
}

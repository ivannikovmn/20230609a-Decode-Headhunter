'use strict';
const Country = require('../app/region/Country')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log('asd');
    const countries = await Country.findAll();
    // await queryInterface.sequelize.query(
    //   'SELECT id FROM Countries;'
    // );

    // console.log(countries);

    // const countryRows = countries[0];
    const countryRows = countries;

    // console.log(countries[0]);

    const citiesData = [
      // Россия
      { name: 'Москва', countryId: countryRows[0].id },
      { name: 'Санкт-Петербург', countryId: countryRows[0].id },
      { name: 'Новосибирск', countryId: countryRows[0].id },
      { name: 'Екатеринбург', countryId: countryRows[0].id },
      { name: 'Нижний Новгород', countryId: countryRows[0].id },
      { name: 'Казань', countryId: countryRows[0].id },
      { name: 'Челябинск', countryId: countryRows[0].id },
      { name: 'Омск', countryId: countryRows[0].id },
      { name: 'Самара', countryId: countryRows[0].id },
      { name: 'Ростов-на-Дону', countryId: countryRows[0].id },
      // Украина
      { name: 'Киев', countryId: countryRows[1].id },
      { name: 'Харьков', countryId: countryRows[1].id },
      { name: 'Одесса', countryId: countryRows[1].id },
      { name: 'Днепр', countryId: countryRows[1].id },
      { name: 'Запорожье', countryId: countryRows[1].id },
      { name: 'Львов', countryId: countryRows[1].id },
      { name: 'Кривой Рог', countryId: countryRows[1].id },
      { name: 'Николаев', countryId: countryRows[1].id },
      { name: 'Мариуполь', countryId: countryRows[1].id },
      { name: 'Винница', countryId: countryRows[1].id },
      // Беларусь
      { name: 'Минск', countryId: countryRows[2].id },
      { name: 'Гомель', countryId: countryRows[2].id },
      { name: 'Могилев', countryId: countryRows[2].id },
      { name: 'Витебск', countryId: countryRows[2].id },
      { name: 'Гродно', countryId: countryRows[2].id },
      { name: 'Брест', countryId: countryRows[2].id },
      { name: 'Бобруйск', countryId: countryRows[2].id },
      { name: 'Барановичи', countryId: countryRows[2].id },
      { name: 'Мозырь', countryId: countryRows[2].id },
      { name: 'Пинск', countryId: countryRows[2].id },
      // Казахстан
      { name: 'Алматы', countryId: countryRows[3].id },
      { name: 'Нур-Султан', countryId: countryRows[3].id },
      { name: 'Шымкент', countryId: countryRows[3].id },
      { name: 'Караганда', countryId: countryRows[3].id },
      { name: 'Актобе', countryId: countryRows[3].id },
      { name: 'Тараз', countryId: countryRows[3].id },
      { name: 'Павлодар', countryId: countryRows[3].id },
      { name: 'Усть-Каменогорск', countryId: countryRows[3].id },
      { name: 'Семей', countryId: countryRows[3].id },
      { name: 'Атырау', countryId: countryRows[3].id },
      // Армения
      { name: 'Ереван', countryId: countryRows[4].id },
      { name: 'Гюмри', countryId: countryRows[4].id },
      { name: 'Ванадзор', countryId: countryRows[4].id },
      { name: 'Ханты-Мансийск', countryId: countryRows[4].id },
      { name: 'Вагаршапат', countryId: countryRows[4].id },
      { name: 'Гавар', countryId: countryRows[4].id },
      { name: 'Капан', countryId: countryRows[4].id },
      { name: 'Армавир', countryId: countryRows[4].id },
      { name: 'Иджеван', countryId: countryRows[4].id },
      { name: 'Абовян', countryId: countryRows[4].id },
      // Азербайджан
      { name: 'Баку', countryId: countryRows[5].id },
      { name: 'Гянджа', countryId: countryRows[5].id },
      { name: 'Сумгайыт', countryId: countryRows[5].id },
      { name: 'Мингечаур', countryId: countryRows[5].id },
      { name: 'Ширван', countryId: countryRows[5].id },
      { name: 'Баку-Азрей', countryId: countryRows[5].id },
      { name: 'Хачмас', countryId: countryRows[5].id },
      { name: 'Ленкорань', countryId: countryRows[5].id },
      { name: 'Нахчыван', countryId: countryRows[5].id },
      { name: 'Бакинский', countryId: countryRows[5].id },
      // Грузия
      { name: 'Тбилиси', countryId: countryRows[6].id },
      { name: 'Кутаиси', countryId: countryRows[6].id },
      { name: 'Батуми', countryId: countryRows[6].id },
      { name: 'Сухуми', countryId: countryRows[6].id },
      { name: 'Зугдиди', countryId: countryRows[6].id },
      // Молдавия
      { name: 'Кишинев', countryId: countryRows[7].id },
      { name: 'Бельцы', countryId: countryRows[7].id },
      { name: 'Тирасполь', countryId: countryRows[7].id },
      { name: 'Бендеры', countryId: countryRows[7].id },
      { name: 'Таганрог', countryId: countryRows[7].id },
      // Таджикистан
      { name: 'Душанбе', countryId: countryRows[8].id },
      { name: 'Худжанд', countryId: countryRows[8].id },
      { name: 'Куляб', countryId: countryRows[8].id },
      { name: 'Конибодом', countryId: countryRows[8].id },
      { name: 'Истаравшан', countryId: countryRows[8].id },
      // Туркменистан
      { name: 'Ашхабад', countryId: countryRows[9].id },
      { name: 'Туркменабат', countryId: countryRows[9].id },
      { name: 'Дашогуз', countryId: countryRows[9].id },
      { name: 'Мары', countryId: countryRows[9].id },
      { name: 'Балканабат', countryId: countryRows[9].id },
      // Узбекистан
      { name: 'Ташкент', countryId: countryRows[10].id },
      { name: 'Наманган', countryId: countryRows[10].id },
      { name: 'Андижан', countryId: countryRows[10].id },
      { name: 'Самарканд', countryId: countryRows[10].id },
      { name: 'Фергана', countryId: countryRows[10].id },
      // Кыргызстан
      { name: 'Бишкек', countryId: countryRows[11].id },
      { name: 'Ош', countryId: countryRows[11].id },
      { name: 'Жалал-Абад', countryId: countryRows[11].id },
      { name: 'Каракол', countryId: countryRows[11].id },
      { name: 'Токмок', countryId: countryRows[11].id },
    ];

    await queryInterface.bulkInsert('Cities', citiesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
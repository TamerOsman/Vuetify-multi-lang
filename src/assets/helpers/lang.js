

const pages = {
    HomeChild2: 
    [
        {caption: 'Customerservicecharter', en: "Customer service charter", ar: "شخصية خدمة العملاء "},
        {caption: 'about', en: "About", ar: "نبذة عنا"},
        {caption: 'home', en: "Homeeee", ar: "الرئسيةdddd"},
    ]

} 

const components = {
  nav: [
    {caption: 'home', en: "Home", ar: "الرئسية"},
    {caption: 'about', en: "About", ar: "نبذة عنا"},
  ]
}



 function component(langCode, componentCaption){
  return   new Promise( (resolve, reject) => {
    try {
      const result = components[componentCaption].map((item) => {
        return {caption : item.caption, value: item[langCode]};
      }).reduce((acc, item) => {
          acc[item.caption] = item.value;
          return acc;
        }, {});

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

function page(langCode, page){
  return new Promise((resolve, reject) => {
    try {
      const result = pages[page].map((item) => {
        return {caption : item.caption, value: item[langCode]};
      }).reduce((acc, item) => {
          acc[item.caption] = item.value;
          return acc;
        }, {});

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export { page, component}
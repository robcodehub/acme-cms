

const mapAndSave = (pages) => Promise.all(pages.map(page => Page.create(page)));

const syncAndSave = async() => {
  await conn.sync({force: true});
  const home = await Page.create({title: 'Home Page'});
  let pages = [
    {title: 'About', parentId: home.id},
    {title: 'Contact', parentId: home.id}
  ];

  const [home, contact] = await mapAndSave(pages);
  page = [
    {title: 'About Our Team', parentId: about.id},
    {title: 'About Our History', parentId: about.id},
    {title: 'Phone', parentId: contact.id},
    {title: 'Fax', parentId: contact.id}
  ];
  const [team, history, phone, fax] = await mapAndSave(pages);

};

  syncAndSeed()
  .then(async()=> {
    const home = await Page.findHomePage();
    console.log(home.title);

    const homeChildnren = await home.findChildren();
    console.log(homeChildren.map(page => page.title));

    const fax = await findOne({where: { title: 'Fax' }});
    console.log(fax.title);

    //hierach returns the page, parentPage, parent's parent etc.
    let hier = await fax.hierarchy()
    console.log(heir.map(page => page.title)); //['Fax', 'Contact', 'Home']

    const history = await Page.findOne({where: {title: 'About Our History'}});
    hier = await history.hierarchy();
    console.log(hier.map(page => page.title)); //['About Our History', 'About', 'Home Page']
  });



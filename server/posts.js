const faker = require('faker/locale/fr');
const fs = require('fs');

function generatePosts() {

  let posts = [];
  let cat = ["politique", "économie", "société" ,"art"];
  for (let id=1; id <= 100; id++) {

    let title = faker.lorem.sentence();
    let slug = faker.helpers.slugify(title);
    let image = faker.image.nature();
    let body = faker.lorem.paragraphs(3);
    let preview = body.substring(0, 100);
    let author = faker.name.findName();
    let category = faker.helpers.randomize(cat);
    let created_at = faker.date.recent();

    posts.push({
        "id": id,
        "title": title,
        "slug": slug,
        "image": image,
        "body": body,
        "preview": preview,
        "author": author,
        "category": category,
        "created_at": created_at
    });
  }

  return { "posts":posts };
}

let postsObj = generatePosts();

fs.writeFileSync('posts.json', JSON.stringify(postsObj, null, '\t'));
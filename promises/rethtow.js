class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
    try{
        const data = await fetch(url);
        const json = await data.json();
        return json;
    }catch(err){
        throw new HttpError(err);
    }
}

async function demoGithubUser() {
  let name = "iliakan";

  try{
    const user = await loadJson(`https://api.github.com/users/${name}`);
    console.log(`Full name: ${user.name}.`);
    return user;
  }catch(err){
      if (err instanceof HttpError && err.response.status == 404) {
        console.log("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
  }
}

demoGithubUser();
class Github {
  constructor() {
    this.client_id = '05b9f81bc1c224125a79';
    this.client_secret = '3a844813894074168fef7b48c0a1abf061fda8e6';
    this.repo_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {  
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      
      const repoResponse = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}

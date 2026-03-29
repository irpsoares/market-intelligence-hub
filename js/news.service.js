export async function loadNews() {
  try {
    const res = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://www.infomoney.com.br/feed/'
    );

    const data = await res.json();

    return data.items.slice(0, 10).map(n => ({
      title: n.title,
      link: n.link
    }));

  } catch (e) {
    return [{ title: 'Erro ao carregar notícias', link: '#' }];
  }
}

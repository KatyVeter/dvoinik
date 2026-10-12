// Подключение сайта и кабинета к базе заявок (Supabase).
// Оба значения берутся в Supabase: Project Settings → API.
// Ключ здесь — публичный (anon / publishable): он умеет только добавлять заявки,
// читать их можно лишь после входа в кабинет. Секретный ключ (service_role) сюда вставлять нельзя.
window.DVOINIK = {
  SUPABASE_URL: '',
  SUPABASE_KEY: ''
};

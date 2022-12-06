const API_URL = `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`;
const Header = {
  'content-type': 'application/json',
  'apikey': 'FcKdtJs202209',
  'username': 'KDT3_LeeHyeRan'
};


// 목록 조회
export async function getTodo(id = '') {
  const res = await fetch(API_URL + `/${id}`, {
    method: 'GET',
    headers: Header
  });
  const json = await res.json();
  return json;
}


// 항목 추가
export async function postTodo({ title, order }) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: Header,
    body: JSON.stringify({ title, order })
  });
  const json = await res.json();
  return json;
}


// 항목 삭제
export async function deleteTodo(id) {
  const res = await fetch(API_URL + `/${id}`, {
    method: 'DELETE',
    headers: Header
  });
  const json = await res.json();
  return json;
}


// 수정
export async function editTodo(id, { title, done, order }) {
  const res = await fetch(API_URL + `/${id}`, {
    method: 'PUT',
    headers: Header,
    body: JSON.stringify({ title, done, order })
  });
  const json = await res.json();
  return json;
}
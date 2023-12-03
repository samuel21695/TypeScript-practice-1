// array에 쓰는 tuple type
type Member = {
  // 글자로 된 모든 object 속성의 타입은 : string
  [key : string] : string
}
let john : Member = { name : 'kim', age : '123'}
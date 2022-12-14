import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Categories, categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

// // function ToDoList() {
// //   const [toDo, setToDo] = useState("");
// //   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
// let event = {
// currentTarget : value
//}
// //     setToDo(value);
// //   };
// 위에 식은 구조분해할당 -> 자바스크립트에서는 객체, 데이터를 생성할 때Array나 Object 형태로 생성을 하는데, 해당 데이터를 가져올 때, const a = array[0] 이나 const a = object.a 라는 형태로 데이터를 가져온다.
// //   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();
// //     console.log(toDo);
// //   };
// //   return (
// //     <div>
// //       <form onSubmit={onSubmit}>
// //         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
// //         <button>Add</button>
// //       </form>
// //     </div>
// //   );
// // }

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    console.log(category);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </div>
    );
}

export default ToDoList;
// handleSubmit을 이용해서 onSubmit 이벤트 대체하기
// 🔶사용방법
// const {register, handleSubmit} = useForm();
// < form onSubmit={handleSubmit(parameter)} >
// 🔶handleSubmit 함수 설명
// -첫번째 인자(필수): 데이터가 유효할 때 호출되는 함수
// -두번째 인자(필수X): 데이터가 유효하지 않을 때 호출되는 함수
// 🔶input의 유효성 검사하기
// < input {...register("email",{required: true})} /> 라고 작성하고 input에 값을 적지 않고 내보내면
// react-hook-form이 값이 유효한지(값이 있는지 없는지) 확인 후 오류가 있는 부분에 커서를 갖다준다.
// < input {...register("email",{required: true, minLength: 10})} /> 쓰면 글자수도 확인해줌

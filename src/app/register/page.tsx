import "../globals.css";
import { RegisterForm } from "../templates/organisms/RegisterForm";

export default function Register() {
  return (
    <section
    id="news"
    className="bg-gray-200 h-auto"
    style={{ paddingBottom: '100px' }} 
    >
      <div className="flex items-center justify-center h-16 bg-lightblue text-2xl">
        <p>会員登録</p>
      </div>
      <p className="text-center m-12">ご予約の前にまずは会員登録をお願いいたします。</p>
  <div>
    <RegisterForm />
  </div>
</section>
  );
}

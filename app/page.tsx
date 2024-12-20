import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const HomePage = async () => {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <div className="p-10">
      <h1>Hello World</h1>
      {session ? (
        <LogoutLink>
          <Button>Logout</Button>
        </LogoutLink>
      ) : (
        <div>
          <RegisterLink>
            <Button>Register</Button>
          </RegisterLink>
          <LoginLink>
            <Button>Login</Button>
          </LoginLink>
        </div>
      )}
    </div>
  );
};

export default HomePage;

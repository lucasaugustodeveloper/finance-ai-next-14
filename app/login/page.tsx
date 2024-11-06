import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../_components/ui/button";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          alt="Finance AI"
          width={173}
          height={39}
          className="mb-8"
        />

        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-3 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>

        <Button className="mt-3" variant="outline">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>

      <div className="relative h-full w-full">
        <Image
          src="/bg_login.png"
          alt="Faça login"
          className="col-span-2"
          fill
        />
      </div>
    </div>
  );
};

export default LoginPage;

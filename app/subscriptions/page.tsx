import { auth, clerkClient } from "@clerk/nextjs/server";
import { CheckIcon, XIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { Badge } from "../_components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../_components/ui/card";
import AcquirePlanButton from "./_components/acquire-plan-button";

const SubscriptionPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const user = await clerkClient().users.getUser(userId);
  const hasPremiumPlan = user.publicMetadata.subscriptionPlan === "premium";

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Assinaturas</h1>

      <div className="flex gap-6">
        <Card className="w-[450px]">
          <CardHeader className="relative border-b border-solid py-8">
            <h2 className="text-center text-2xl font-semibold">Plano básico</h2>

            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">R$</span>
              <span className="text-semibold text-6xl">0</span>
              <span className="text-2xl text-muted-foreground">/mês</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 py-8">
            <div className="flex items-center gap-2">
              <CheckIcon className="text-primary"></CheckIcon>
              <p>Apenas 10 transações por mês (7 de 10)</p>
            </div>

            <div className="flex items-center gap-2">
              <XIcon></XIcon>
              <p>Relatórios de AI</p>
            </div>

            <div className="flex items-center gap-2">
              <XIcon></XIcon>
              <p>Apenas 10 transações por mês (7 de 10)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-[450px]">
          <CardHeader className="relative border-b border-solid py-8">
            {hasPremiumPlan && (
              <Badge className="absolute left-4 top-10 bg-primary/10 text-primary">
                Ativo
              </Badge>
            )}
            <h2 className="text-center text-2xl font-semibold">
              Plano Premium
            </h2>

            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">R$</span>
              <span className="text-semibold text-6xl">19</span>
              <span className="text-2xl text-muted-foreground">/mês</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 py-8">
            <div className="flex items-center gap-2">
              <CheckIcon className="text-primary"></CheckIcon>
              <p>Apenas 10 transações por mês (7 de 10)</p>
            </div>

            <div className="flex items-center gap-2">
              <CheckIcon className="text-primary"></CheckIcon>
              <p>Relatórios de AI</p>
            </div>

            <div className="flex items-center gap-2">
              <XIcon></XIcon>
              <p>Apenas 10 transações por mês (7 de 10)</p>
            </div>
          </CardContent>

          <CardFooter>
            <AcquirePlanButton />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionPage;

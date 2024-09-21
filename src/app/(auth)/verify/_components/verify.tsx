'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import { useRouter, useSearchParams } from 'next/navigation';

export const Verify = () => {
  const router = useRouter();
  const param = useSearchParams();
  const phone = param.get('phone');
  console.log(phone);

  const handleVerfiyOTP = (e: any) => {
    e.preventDefault();
    router.push('/admin');
  };
  return (
    <Card className="w-[350px] space-y-5">
      <form>
        <CardHeader>
          <CardTitle>Sing Up | Sing in</CardTitle>
          <CardDescription>
            please enter your phone number to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col items-center space-y-4">
              <Label htmlFor="code">OTP code</Label>
              <InputOTP className="w-full" id="code" maxLength={7}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handleVerfiyOTP}
            variant="default"
            size="lg"
            className="w-full"
          >
            Confirm
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

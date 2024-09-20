import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label';
import React from 'react';

const Register = () => {
  return (
    <Card className="w-[350px] space-y-5">
      <CardHeader>
        <CardTitle>Sing Up | Sing in</CardTitle>
        <CardDescription>
          please enter your phone number to sign in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-4">
              <Label htmlFor="phone">Phone</Label>
              <Input
                className="py-1.5"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="default" size="lg" className="w-full">
          Confirm
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Register;

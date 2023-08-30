"use client";

import { Form } from "@/components/ui/form";
interface Props {
  user: {
    id: String;
    objectId: string;
    username: string;
    name: string;
    bio: String;
    image: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  return <Form></Form>;
};

export default AccountProfile;

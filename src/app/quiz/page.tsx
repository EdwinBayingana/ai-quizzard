import QuizCreation from '@/components/QuizCreation';
import { getAuthSession } from '@/lib/nextauth';
import React from 'react';
import { redirect } from '../../../node_modules/next/navigation';

type Props = {
  searchParams: {
    topic?: String;
  };
};

export const metadata = {
  title: 'Quiz | Quizmify',
};

const QuizPage = async ({ searchParams }: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect('/');
  }
  return <QuizCreation topicParam={searchParams.topic ?? ''} />;
};

export default QuizPage;

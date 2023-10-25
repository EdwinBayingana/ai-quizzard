import QuizCreation from '@/components/QuizCreation';
import { getAuthSession } from '@/lib/nextauth';
import React from 'react';
import { redirect } from '../../../node_modules/next/navigation';

type Props = {};

export const metadata = {
  title: 'Quiz | Quizmify',
};

const QuizPage = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect('/');
  }
  return <QuizCreation />;
};

export default QuizPage;

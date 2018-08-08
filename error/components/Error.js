import React from 'react';
import history from '../../history'

export default function Error() {
  return (
    <div>
      <h1>エラーページ</h1>
      <button onClick={() => history.push('/todoApp')} >戻る</button>
    </div>
  );
}
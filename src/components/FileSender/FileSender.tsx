import React, { useCallback, useRef } from 'react';
import ss from './FileSender.module.scss';
import useFileSend from 'modules/fileSend/hooks/useFileSend';

function FileSender(): JSX.Element {
  const fileSend = useFileSend();
  const inputEl = useRef<HTMLInputElement>(null);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const node = inputEl.current;
      if (node === null || !node.files) return;

      const file = node.files[0];
      if (!file) return;

      fileSend({ file });
    },
    [inputEl, fileSend],
  );

  return (
    <form onSubmit={onSubmit} className={ss.ml2r}>
      <p>
        Please select a file.
        <input type="file" ref={inputEl} className={ss.ml1r} />
      </p>
      <button type="submit">Send</button>
    </form>
  );
}

export default FileSender;

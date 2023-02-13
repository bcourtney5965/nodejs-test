import classNames from 'classnames';

function TableRow({children, colStyles=[], styles=[]}) {
  return (
    <table className={classNames(styles)}>
      <col span="1" className={classNames(colStyles)} />
        {children}
    </table>
  )
}

export default TableRow;

// import React, { useState } from 'react';
// import { Paginator } from 'primereact/paginator';
// import { Button } from 'primereact/button';
// import './PaginatorDemo.css';

// const MainPaginator = () => {
//     const [contentFirst, setContentFirst] = useState(0);
//     const onContentPageChange = (event) => {
//         setContentFirst(event.first);
//     }

//     const leftContent = <Button type="button" icon="pi pi-refresh" onClick={() => setContentFirst(0)} />;
//     const rightContent = <Button type="button" icon="pi pi-search" />;

//     return (
//         <div className="paginator-demo">
//             <div className="card">
//                 <h5>Hot Place</h5>
//                 <Paginator first={contentFirst} rows={1} totalRecords={12} onPageChange={onContentPageChange}
//                     leftContent={leftContent} rightContent={rightContent}
//                     template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>

//                 <div className="image-gallery">
//                     {/* https://ifh.cc/g/5CYlGK.gif
//                       <img alt={contentFirst} src={`images/nature/nature${contentFirst + 1}.jpg`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} /> */}
//                     <img alt={contentFirst} src={`images/nature/nature${contentFirst + 1}.jpg`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MainPaginator
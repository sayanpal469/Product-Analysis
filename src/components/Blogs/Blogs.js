import React from 'react';

const Blogs = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10 my-20 gap-5'>
            <div className='w-5/6 text-center shadow-xl p-5 rounded-3xl mx-auto'>
                <h1 className='text-2xl mb-5 font-bold'>What is Semantic Tag?</h1>
                <p>Semantic tags without a doubt outline the cause of the HTML detail. It additionally describes the form of content material that the detail must contain. Semantic tags additionally assist search engines like google like google and yahoo to parse the web site efficiently and locate correct information. Thus, assisting search engines like google like google and yahoo to efficiently index the page.</p>
            </div>
            <div className='w-5/6 text-center shadow-xl p-5 rounded-3xl mx-auto '>
                <h1 className='text-2xl mb-5 font-bold'>What is Context Api?</h1>
                <p>The Context Api is furnished via way of means of react,it is part structure ,that permits us to proportion unique styles of information throughout all tiers of the application. It’s principal goal at fixing the trouble of prop drilling.

                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
        </div>
    );
};

export default Blogs;
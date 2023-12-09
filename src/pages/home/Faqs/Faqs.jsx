import Faq from 'react-faq-component';

const data = {
    title: " ",
    rows: [
        {
            title: "How do I submit an assignment on the website?",
            content: 'To submit an assignment, log in to your account and navigate to the "Submit Assignment" section. Follow the on-screen instructions to upload the required files, provide any necessary information, and confirm your submission. You will receive a confirmation once your assignment is successfully submitted.'
        },
        {
            title: "Can I submit multiple versions of an assignment?",
            content: "Yes, our platform supports the submission of multiple versions of an assignment. When submitting your work, you'll have the option to upload different versions or revisions. The system keeps a submission history, allowing you to track changes and revert to previous versions if needed."
        },
        {
            title: "What file formats are accepted for assignment submissions?",
            content: "Our platform accepts a variety of file formats, including documents (e.g., Word, PDF), images, spreadsheets, and more. Ensure that your files are in a compatible format, and you can use our multi-file upload feature to submit all the necessary materials for your assignment."
        },
        {
            title: "How can I check the status and feedback for my submitted assignments?",
            content: 'To check the status and feedback for your submitted assignments, log in to your account and visit the "My Assignments" or "Submission History" section. Here, you will find a list of your submitted assignments along with their current status (e.g., under review, graded). Click on a specific assignment to view any feedback or grades provided by your instructor.'
        }]
}

const Faqs = () => {
    return (
        <div className='w-[95%] lg:w-full mx-auto mt-16'>
            <h2 className="text-center text-4xl font-semibold mb-4">Frequently Asked Questions</h2>
            <Faq data={data}
                styles={{
                    bgColor: "#1a103d",
                    rowTitleColor: "#2563eb",
                    rowTitleTextSize: 'large',
                    rowContentColor: "#94a3b8",
                    rowContentTextSize: '16px',
                    rowContentPaddingTop: '10px',
                    rowContentPaddingBottom: '10px',
                    arrowColor: "#3b82f6",
                }}
            />
        </div>
    );
};

export default Faqs;
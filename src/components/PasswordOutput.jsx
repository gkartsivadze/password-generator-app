import { FaRegClipboard } from "react-icons/fa";

export default function PasswordOutput({ outputPassword }) {
    function copyToClipboard(e) {
        e.preventDefault();
        const passwordOutput = document.getElementById('password_output');
        passwordOutput.select();
        document.execCommand('copy');
    }
    return (
        <label className="bg-blue-950 [&>*]:p-2 rounded-sm">
            <input type="text" name="password_output" id="password_output" className="w-full bg-transparent" value={outputPassword} readOnly />
            <button onClick={e => copyToClipboard(e)}>
                <FaRegClipboard />
            </button>
        </label>
    )
};

// Function to generate a unique ID (UUID v4)
function generateUniqueId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Generate and display the user's unique ID
const userId = generateUniqueId();
document.getElementById('userIdDisplay').textContent = userId;

document.getElementById('sendButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const receiverId = document.getElementById('receiverId').value;

    if (fileInput.files.length > 0 && receiverId) {
        // Simulate sending file
        const file = fileInput.files[0];
        const fileUrl = URL.createObjectURL(file);

        // Store file URL in sessionStorage with receiver's ID as the key
        sessionStorage.setItem(receiverId, fileUrl);

        alert('File sent successfully!');
    } else {
        alert('Please select a file and enter the receiver\'s ID.');
    }
});

document.getElementById('checkButton').addEventListener('click', function() {
    const fileUrl = sessionStorage.getItem(userId);

    if (fileUrl) {
        // Simulate receiving file
        if (confirm('RECEIVE FILE?')) {
            const a = document.createElement('a');
            a.href = fileUrl;
            a.download = 'received_file';
            a.click();

            // Clear the file after download
            sessionStorage.removeItem(userId);
        }
    } else {
        alert('No files available for this ID.');
    }
});

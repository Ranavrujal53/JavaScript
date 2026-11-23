const songs = [
    {
        title: "Shri Ram Jai Ram Jai Jai Ram",
        artist: "Anuradha Paudwal",
        duration: "7:15"
    },
    {
        title: "Ram Siya Ram",
        artist: "Sachet Tandon",
        duration: "4:25"
    },
    {
        title: "Mere Ghar Ram Aaye Hain",
        artist: "Jubin Nautiyal",
        duration: "5:12"
    },
    {
        title: "Shree Ram Chandra Kripalu Bhajman",
        artist: "Hari Om Sharan",
        duration: "6:48"
    },
    {
        title: "Raghupati Raghav Raja Ram",
        artist: "Lata Mangeshkar",
        duration: "4:05"
    }
];

console.table(songs);

const tableBody = document.getElementById("songTable");

songs.forEach(function (song) {
    const row = `
        <tr>
            <td>${song.title}</td>
            <td>${song.artist}</td>
            <td>${song.duration}</td>
        </tr>
    `;

    tableBody.innerHTML += row;
});
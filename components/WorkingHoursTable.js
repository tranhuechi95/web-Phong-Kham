const WorkingHoursTable = () => {
    return (
        <table className="working-hours-table fontRoboLight fontSize1-2vw">
            <tbody>
                <tr>
                    <td>Thứ Hai - Thứ Sáu</td>
                    <td>17h00 - 20h00</td>
                </tr>
                <tr>
                    <td>Thứ Bảy</td>
                    <td>08h30 - 11h00, 16h00 - 20h00</td>
                </tr>
                <tr>
                    <td>Chủ Nhật</td>
                    <td>08h30 - 11h00, 15h00 - 20h00</td>
                </tr>
            </tbody>
        </table>
    )
}

export default WorkingHoursTable;

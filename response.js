const response =(SatusCode, data, res)  => {
    res.status(StatusCode).json({
       Status_code: SatusCode,
       datas: data 
    })
}

module.exports = response
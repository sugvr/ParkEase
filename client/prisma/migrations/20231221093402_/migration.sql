-- CreateTable
CREATE TABLE "User" (
    "UserId" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserId")
);

-- CreateTable
CREATE TABLE "Lot" (
    "LotId" SERIAL NOT NULL,
    "LotName" TEXT NOT NULL,
    "Capacity" INTEGER NOT NULL,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Lot_pkey" PRIMARY KEY ("LotId")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "ReservationId" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "LotId" INTEGER NOT NULL,
    "StartDate" TIMESTAMP(3) NOT NULL,
    "EndDate" TIMESTAMP(3) NOT NULL,
    "Comment" TEXT,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("ReservationId")
);

-- CreateTable
CREATE TABLE "HourlyPricePerLot" (
    "PriceId" SERIAL NOT NULL,
    "NumberOfHour" INTEGER NOT NULL,
    "PricePerHour" DOUBLE PRECISION,

    CONSTRAINT "HourlyPricePerLot_pkey" PRIMARY KEY ("PriceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Lot_LotName_key" ON "Lot"("LotName");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_LotId_fkey" FOREIGN KEY ("LotId") REFERENCES "Lot"("LotId") ON DELETE RESTRICT ON UPDATE CASCADE;

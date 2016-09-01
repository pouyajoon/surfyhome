#!/bin/bash
# simple shmsetup script
# page_size=`getconf PAGE_SIZE`
# phys_pages=`getconf _PHYS_PAGES`
# shmall=`expr $phys_pages / 2`
# shmmax=`expr $shmall \* $page_size`
echo kernel.shmmax = 1055092736
echo kernel.shmall = 257591